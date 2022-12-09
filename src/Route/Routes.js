import 'react-native-gesture-handler';
import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {navigationRef} from './RootNavigation';
import Tabs from './Tabs/index';
import Login from './Login/index';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
const Routes = () => {
  const lightMode = useSelector(state => state.config.lightMode);
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={lightMode ? DefaultTheme : DarkTheme}>
      <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
          headerStyle: {backgroundColor: '#633689'},
          headerTintColor: '#fff',
          headerShown: false,
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTab" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {Routes};
