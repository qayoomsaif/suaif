import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../UI/Screens/Home/Home'
import PersonalProfilePage1 from '../../UI/Screens/User/PersonalInfo/Page1'
import PersonalProfilePage2 from '../../UI/Screens/User/PersonalInfo/Page2'
import UploadImage from '../../UI/Screens/User/PersonalInfo/UploadImage'
import Notifications from '../../UI/Screens/Home/Notifications';
const Stack = createNativeStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Group navigationKey='HomeTab'>
                <Stack.Screen name="HomeTAb2" component={Home} />
            </Stack.Group>
            <Stack.Screen name='PersonalInfo1' component={PersonalProfilePage1}/>
            <Stack.Screen name='PersonalInfo2' component={PersonalProfilePage2}/>
            <Stack.Screen name='UploadProfileImage' component={UploadImage}/>
            <Stack.Screen name='Notifications' component={Notifications}/>
        </Stack.Navigator>
    );
}
