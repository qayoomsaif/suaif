import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Explore from '../../UI/Screens/Home/Tasks'
export default function TaskStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Explore'>
            <Stack.Screen name="Tasks" component={Explore} />
        </Stack.Navigator>
    );
}
