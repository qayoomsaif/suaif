import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../UI/Screens/User/Singin';
import InitialSignIn from '../../UI/Screens/User/IntailSingin'
const Stack = createNativeStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='InitialSignIn'>
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name='InitialSignIn' component={InitialSignIn}/>
    </Stack.Navigator>
  );
}
