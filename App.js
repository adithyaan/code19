import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import signUp from './components/signup/signUp';
import signIn from './components/signin/signIn';
import Home from './components/home/home';

const drawerNavigator = createDrawerNavigator(
  {
    Home: {screen: Home},
    test: {screen: Home},
    test1: {screen: Home},
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: '#000000',
    backBehavior: 'initialRoute',
    activeBackgroundColor: '#ffffff',
    contentOptions: {
      inactiveTintColor: '#ffffff',
    },
  },
);

const AuthNavigator = createStackNavigator(
  {
    SignUp: signUp,
    signIn: {screen: signIn, navigationOptions: {header: null}},
    Home: drawerNavigator,
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(AuthNavigator);

export default App;
