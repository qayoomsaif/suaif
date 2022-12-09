import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import { hp } from 'globalStyle';
const { TaskIcon, WillIcon, AddIcon, HomeIcon } = SVGS
const MenuIcon = SVGS.MenuIcon
import { useColors } from '../../UI/GlobalStyle/color';
import TaskStack from './TaskStack';
import AddAssets from './AddAssets';
import { height, totalSize } from 'react-native-dimension';
import WillStack from './Will';
import MenuStack from './Menu';
import styles from './styles';
const Tab = createBottomTabNavigator();
export default function Tabs() {
  const color = useColors();
  const innerStyle = styles(color);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: innerStyle.container,
        tabBarHideOnKeyboard: false
      }}
      initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => (
            <View style={innerStyle.tabIconContainer}>
              {focused ? <HomeIcon /> : <HomeIcon />}
              <Text style={innerStyle.text}>{'HOME'}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TaskTab"
        component={TaskStack}
        options={{
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={innerStyle.tabIconContainer}>
              {focused ? <TaskIcon /> : <TaskIcon />}
              <Text style={innerStyle.text}>{'TASKS'}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddAssetsTab"
        component={AddAssets}
        options={{
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={[innerStyle.tabIconContainer, { top: -totalSize(1.8) }]}>
              {focused ? <AddIcon /> : <AddIcon />}
              <Text style={innerStyle.text}>{'ADD ASSETS'}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="WillTab"
        component={WillStack}
        options={{
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={innerStyle.tabIconContainer}>
              {focused ? <WillIcon /> : <WillIcon />}
              <Text
                style={innerStyle.text}>
                {'WILL'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={innerStyle.tabIconContainer}>
              {focused ? <MenuIcon /> : <MenuIcon />}
              <Text style={innerStyle.text}>{'MENU'}</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
