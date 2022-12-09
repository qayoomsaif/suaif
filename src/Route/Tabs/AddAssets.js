import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAssets from '../../UI/Screens/Home/Add';
const Stack = createNativeStackNavigator();
export default function AddAssetsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
            <Stack.Screen name="AddAssets" component={AddAssets} />
        </Stack.Navigator>
    );
}
