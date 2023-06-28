import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

export default function FeaturedRow({title, description, kawiarnias}) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color: themeColors.text}} className="font-semibold">Zobacz wszystkie</Text>
                </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            className="overflow-visible py-5"
            >
            {
                kawiarnias.map((kawiarnia, index) =>  {
                    return(
                        <KawiarniaCard
                        item={kawiarnia}
                        key={index}
                        />
                    )

                })
            }
            </ScrollView>
            </View>
    )
}