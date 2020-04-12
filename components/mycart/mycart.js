import React from 'react';
import {Card, Icon, Text, Button} from 'native-base';
import {Image, View, StyleSheet} from 'react-native';
import Header from '../header/header';

export default class MyCart extends React.Component {
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
      <>
        <Header props={this.props} />
        {this.data.map((item) => {
          return (
            <Card style={styles.card}>
              <View style={styles.row}>
                <View>
                  <Image
                    source={require('../../assets/images/grocery.jpeg')}
                    style={styles.image}
                  />
                  <Text style={{marginLeft: 40}}>{item.name}</Text>
                </View>
                <View style={styles.right}>
                  <Text>Fresh Tomatoes</Text>
                  <View>
                    <Button style={styles.button}>
                      <Text style={{alignSelf: 'center', fontSize: 15}}>-</Text>
                    </Button>
                    <Text>Quantity 2 kg</Text>
                    <Button style={styles.button}>
                      <Text style={{alignSelf: 'center', fontSize: 15}}>+</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Card>
          );
        })}
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    borderRadius: 7,
    marginLeft: 10,
    marginRight: 10,
    height: 200,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    marginLeft: 50,
    marginTop: 40,
  },
  addToCart: {
    color: 'green',
    fontStyle: 'normal',
    fontSize: 15,
    marginBottom: 0,
  },
  button: {
    width: 40,
    height: 20,
  },
});
