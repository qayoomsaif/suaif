import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../../UI/Screens/Home/Menu';
const Stack = createNativeStackNavigator();
export default function MenuStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Menu'>
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    );
}
