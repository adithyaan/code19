import React from 'react';
import {Text, View, Card, Fab, Icon} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../header/header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header props={this.props} />
        <Text style={styles.title}>
          Stay Safe and Maintain Social Distancing
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Products');
            }}>
            <Card style={styles.card} />
          </TouchableOpacity>

          <Card style={styles.card} />
        </View>
        <View style={styles.row}>
          <Card style={styles.card} />
          <Card style={styles.card} />
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
});
