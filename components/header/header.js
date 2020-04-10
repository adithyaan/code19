/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon, View} from 'native-base';
import {DrawerActions} from '@react-navigation/native';

const Header = (props) => {
  return (
    <View>
      <Icon
        style={{margin: 15}}
        name="menu"
        onPress={() => {
          props.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
    </View>
  );
};

export default Header;
