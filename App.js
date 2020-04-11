import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Orders from './components/current-orders/orders';
import signUp from './components/signup/signUp';
import signIn from './components/signin/signIn';
import Home from './components/home/home';
import Products from './components/products/products';
import Tracker from './components/covid19tracker/tracker';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Your Orders" component={Home} />
        <Drawer.Screen name="Local Traders" component={Home} />
        <Drawer.Screen name="Covid19 Tracker" component={Tracker} />
        <Drawer.Screen name="Self Assesment" component={Home} />
        <Drawer.Screen name="Approved Orders" component={Home} />
        <Drawer.Screen name="Feedback" component={Products} />
        <Drawer.Screen name="Orders" component={Orders} />

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
