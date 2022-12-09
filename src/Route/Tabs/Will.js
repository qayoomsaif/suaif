import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Will from '../../UI/Screens/Home/Will';
const Stack = createNativeStackNavigator();
export default function WillStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
            <Stack.Screen name="Will" component={Will} />
        </Stack.Navigator>
    );
}
