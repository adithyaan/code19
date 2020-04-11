import React from 'react';
import ProductsList from '../../fragments/WUList/wUlist';
import Header from '../header/header';
import {View} from 'react-native';

 export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  data = [
    {
      name: 'Grapes',
    },
    {
      name: 'Apple',
    },
    {
      name: 'Guava',
    },
    {
      name: 'Chickoo',
    },
    {
      name: 'JackFruit',
    },
  ];

  render() {
    return (
      <View>
        <Header props={this.props} />
        <ProductsList products={this.data} isProduct />
      </View>
    );
  }
}

