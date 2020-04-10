import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import signUp from './components/signup/signUp';
import signIn from './components/signin/signIn';
import Home from './components/home/home';
import 'react-native-gesture-handler';

// const drawerNavigator = createDrawerNavigator(
//   {
//     Home: {screen: Home},
//     test: {screen: Home},
//     test1: {screen: Home},
//   },
//   {
//     initialRouteName: 'Home',
//     drawerBackgroundColor: '#000000',
//     backBehavior: 'initialRoute',
//     activeBackgroundColor: '#000',
//     contentOptions: {
//       inactiveTintColor: '#ffffff',
//     },
//   },
// );

// const AuthNavigator = createStackNavigator(
//   {
//     SignUp: signUp,
//     signIn: {screen: signIn, navigationOptions: {header: null}},
//     Home: drawerNavigator,
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Home} />
      </Drawer.Navigator>
    </>
  );
};
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="SignIn" component={signIn} />
        <Stack.Screen name="SignUp" component={signUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
