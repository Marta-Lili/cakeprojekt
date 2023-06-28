import {NavigaionContainer} from '@react-navigation/native';
import { createNaviveStackNavigator } from '@react-navigation/native-stack';
const Stack = createNaviveStackNavigator(); 
import {View, Text} from 'react-native'
import React from 'react'

export default function Navigation(){
    reurn (
        <NavigaionContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Kawarnia" component={KawiarniaScreen} />         
            </Stack.Navigator>
        </NavigaionContainer>
    )
}