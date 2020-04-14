/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, Icon, Text, Button} from 'native-base';
import {Image, View, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import CountDown from 'react-native-countdown-component';

class WUList extends React.Component {
  cartItems = [];

  constructor(props) {
    super(props);
  }
  state = {
    dialogVisible: false,
  };

  showDialog = () => {
    this.setState({dialogVisible: true});
  };

  confirmAdd = (item) => {
    this.setState({dialogVisible: false});
    this.props.addItem({type: 'ADD_DATA', item: item});
    this.storeData(item);
  };

  storeData = async (item) => {
    this.cartItems.push(item);
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      console.log(this.cartItems);
    } catch (e) {
      // saving error
    }
  };

  renderProducts = (products) => {
    return products.map((item) => {
      return (
        <Card style={styles.card}>
          <View style={styles.row}>
            <View>
              <Image
                source={require('../../assets/images/grocery.jpeg')}
                style={styles.image}
              />
              <Text style={{marginLeft: 40}}>Product 1</Text>
            </View>
            <View style={styles.right}>
              <Text>Fresh Tomatoes</Text>
              <Text>Available</Text>
              <Text
                style={styles.addToCart}
                onPress={() => this.showDialog(item)}>
                Add To Cart
              </Text>
            </View>
          </View>
          <View>
            <Dialog.Container visible={this.state.dialogVisible}>
              <Dialog.Title>Add to cart</Dialog.Title>
              <Dialog.Description>
                Please Specify the quantity to be added
              </Dialog.Description>
              <Dialog.Input style={styles.input} placeholder="quantity" />
              <Dialog.Button
                label="Add"
                onPress={() => this.confirmAdd(item)}
              />
            </Dialog.Container>
          </View>
        </Card>
      );
    });
  };

  renderOrders = (orders) => {
    return orders.map((item) => {
      return (
        <Card style={styles.card}>
          <View style={styles.row}>
            <View>
              <Image
                source={{
                  uri:
                    'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
                }}
                style={styles.image}
              />
              <Text style={{marginLeft: 40}}>Adithya AN</Text>
            </View>
            <View style={styles.right}>
              <Text>3 km away</Text>
              <Button
                style={styles.addBid}
                onPress={() => this.showDialog(item)}>
                <Text>Add Bid</Text>
              </Button>
              <Text
                style={styles.currentBid}
                onPress={() => this.showDialog(item)}>
                Current Bid is 500 Rupes
              </Text>
              <CountDown
                until={60 * 10 + 30}
                onFinish={() => alert('finished')}
                onPress={() => alert('hello')}
                size={15}
              />
            </View>
          </View>
          <View>
            <Dialog.Container visible={this.state.dialogVisible}>
              <Dialog.Title>Bid</Dialog.Title>
              <Dialog.Description>
                Please Specify the Amount to Bid
              </Dialog.Description>
              <Dialog.Input style={styles.input} placeholder="quantity" />
              <Dialog.Button label=" Add Bid" onPress={this.confirmAdd} />
            </Dialog.Container>
          </View>
        </Card>
      );
    });
  };

  render() {
    const {products, orders, isProduct, isOrder} = this.props;
    console.log(this.props);
    return (
      <View>
        {isProduct ? this.renderProducts(products) : null}
        {isOrder ? this.renderOrders(orders) : null}
      </View>
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
  input: {
    borderColor: 'black',
  },
  currentBid: {
    color: 'red',
    fontStyle: 'normal',
    fontSize: 15,
    marginBottom: 0,
    width: 100,
    marginTop: 10,
  },
  addBid: {
    height: 30,
  },
});
const mapStateToProps = (state) => {
  alert(JSON.stringify(state));
  const {check_box} = state.cartReducer;
  return {
    cartItems: check_box,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    addItem: (data) => dispatch(data),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(WUList);
