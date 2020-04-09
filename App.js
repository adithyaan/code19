import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar,Text} from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>test</Text>
      <SafeAreaView />
    </>
  );
};


export default App;
