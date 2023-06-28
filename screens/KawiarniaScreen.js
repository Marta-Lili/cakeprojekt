import {View, Text} from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'

export default function KawiarniaScreen(){
    const {params} = useRoute();
    let item = params;
    console.log('kawiarnia: ', item);
return (
    <View>
        <ScrollView>
            <View className="relative">
                <Image className="w-full h-72" source={item.image} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                </TouchableOpacity>
            </View>
            <View
                style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                className="bg-white -mt-12 pt-6"
                >
                    <View className="px-5">
                    <Text className="text-3xl font-bold">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">
                                ({item.reviews} review) <Text className="font-semibold">{item.category}</Text>
                            </Text>
                        </Text>
                    </View>
                        <View className="flex-row items-center space-x-1">
                            <Icon.MapPin color="gray" width="15" height="15" />
                            <Text className="text-gray-700 text-xs">Pobliskie {item.address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2">{item.description}</Text>
            </View>
            <View className="pb-36 bg-white">
                <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                {
                    item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index}/>)
                }
            </View>
        </ScrollView>
    </View>
)
}