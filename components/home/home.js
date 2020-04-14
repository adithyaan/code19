import React from 'react';
import {Text, View, Card, Fab, Icon} from 'native-base';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../header/header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/images/background.png')}
        />
        <Header props={this.props} />

        <Text style={styles.title}>
          Stay Safe and Maintain Social Distancing
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Products');
            }}>
            <Card style={styles.card}>
              <Image
                style={styles.image}
                source={require('../../assets/images/vegetables.png')}
              />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Products');
            }}>
            <Card style={styles.card}>
              <Image
                style={styles.image}
                source={require('../../assets/images/fruits.png')}
              />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Products');
            }}>
            <Card style={styles.card}>
              <Image
                style={styles.image}
                source={require('../../assets/images/medicine.png')}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Products');
            }}>
            <Card style={styles.card}>
              <Image
                style={styles.image}
                source={require('../../assets/images/groceries.png')}
              />
            </Card>
          </TouchableOpacity>
        </View>
        <Card
          style={styles.messageContainer}
          onPress={() => {
            this.props.navigation.navigate('Products');
          }}>
          <Text>
            Let us Know Your needs..! We will serve you at your door step
          </Text>
        </Card>
        <View style={styles.chatBot}>
          <Fab position="bottomRight">
            <Icon name="logo-whatsapp" />
          </Fab>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    margin: 10,
  },
  card: {
    height: 180,
    width: 180,
  },
  row: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageContainer: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  chatBot: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    height: 180,
    width: 180,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
