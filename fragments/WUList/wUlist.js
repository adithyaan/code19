import React from 'react';
import {Card, Icon, Text} from 'native-base';
import {Image,View} from 'react-native';
import GroceryImage from '../../assets/images/grocery.jpeg';
export default class WUList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {products} = this.props;

    return products.map((item) => {
      return (
        <Card>
          <View>
            <Image src={GroceryImage} />
            <View>
              <Text>title</Text>
              <Text>Available</Text>
              <Text>Add To Card</Text>
            </View>
          </View>
        </Card>
      );
    });
  }
}
