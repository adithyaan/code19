import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import signUp from './components/signup/signUp';
import signIn from './components/signin/signIn';
import Home from './components/home/home';
import Products from './components/products/products';

import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Your Orders" component={Home} />
        <Drawer.Screen name="Local Traders" component={Home} />
        <Drawer.Screen name="Covid19 Tracker" component={Home} />
        <Drawer.Screen name="Self Assesment" component={Home} />
        <Drawer.Screen name="Approved Orders" component={Home} />
        <Drawer.Screen name="Feedback" component={Home} />
      </Drawer.Navigator>
    </>
  );
};
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={signIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={signUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
