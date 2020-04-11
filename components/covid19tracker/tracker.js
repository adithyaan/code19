/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Header from '../header/header';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Item, Icon, Picker} from 'native-base';

export default class Tracker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {trackerData: {}};
  }

  componentDidMount() {
    const promise = fetch('https://corona-stats.online/india?format=json');
    promise
      .then((response) => response.json())
      .then((data) => {
        const trackerData = {};
        data = data.data;
        trackerData.confirmed = data[0].confirmed;

        trackerData.active = data[0].active;

        trackerData.death = data[0].deaths;

        trackerData.recoverd = data[0].recovered;

        this.setState({trackerData: trackerData});
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {trackerData} = this.state;
    return (
      <View>
        <Header props={this.props} />

        <Text style={styles.heading}>OverAll Report for India</Text>

        <View style={styles.row}>
          <Card style={{...styles.card, backgroundColor: '#fa8072'}}>
            <Text style={styles.confirmedText}>CONFIRMED</Text>
            <Text style={styles.confirmedText}>{trackerData.confirmed}</Text>
          </Card>
          <Card style={{...styles.card, backgroundColor: '#007bff'}}>
            <Text style={styles.activeText}>Active</Text>
            <Text style={styles.activeText}>{trackerData.active}</Text>
          </Card>
        </View>

        <View style={styles.row}>
          <Card style={{...styles.card, backgroundColor: '#28a745'}}>
            <Text style={styles.recoveredText}>Recoverd</Text>
            <Text style={styles.recoveredText}>{trackerData.recoverd}</Text>
          </Card>
          <Card style={{...styles.card, backgroundColor: 'gray'}}>
            <Text style={styles.activeText}>Deceased</Text>
            <Text style={styles.activeText}>{trackerData.death}</Text>
          </Card>
        </View>
        <Text style={styles.heading2}>
          For Individual State Reports Choose a State Here
        </Text>
        <Item picker style={styles.dropdown}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            placeholder="Select your SIM"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff">
            <Picker.Item label="TamilNadu" value="key0" />
            <Picker.Item label="Andhra Pradesh" value="key1" />
            <Picker.Item label="Telangana" value="key2" />
            <Picker.Item label="Karnataka" value="key2" />
            <Picker.Item label="Maharastra" value="key2" />
          </Picker>
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    width: 100,
    alignItems: 'center',
  },
  confirmedText: {
    color: 'red',
    fontSize: 15,
  },
  activeText: {
    color: 'white',
    fontSize: 15,
  },
  recoveredText: {
    color: 'white',
    fontSize: 15,
  },
  row: {
    alignSelf: 'center',
    marginTop: 70,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 25,
    marginTop: 20,
    alignSelf: 'center',
  },
  heading2: {
    fontSize: 25,
    marginLeft: 35,
    marginTop: 20,
    alignSelf: 'center',
  },
  dropdown: {
    margin: 20,
  },
});
