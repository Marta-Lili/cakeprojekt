import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import * as Icon from "react-native-feather";
import {themeColors} from '../theme';

export default function KawiarniaCard({item}) {
        const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={()=> navigation.navigate('Kawiarnia', {...item})}
            >
            <View 
            style={{
                shadowColor: themeColors.bgColor(0.2),
                shadowRadius: 7 
            }}
            className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row space-x-2 my-1">
                        
                    </View>
                </View>
            </View>
            <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">Okolica {item.address}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}