/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Item, Picker, Icon, Toast} from 'native-base';

export default class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    locality: '',
    usertype: '',
  };
  static navigationOptions = {
    headerMode: 'none',
  };
  onUserTypeChange(value) {
    this.setState({
      usertype: value,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>#weUnite</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({name: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Mobile Number"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({mobile: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Address"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({address: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Locality"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({locality: text})}
          />
        </View>
        <View style={styles.inputView}>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              onValueChange={() => this.onUserTypeChange()}
              selectedValue={this.state.usertype}>
              <Picker.Item label="Customer" value="key0" />
              <Picker.Item label="Trader" value="key1" />
              <Picker.Item label="Delivery" value="key2" />
            </Picker>
          </Item>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.signUp()}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  signUp = () => {
    let formData = new FormData();
    formData.append('name', this.state.name);

    formData.append('email', this.state.email);
    formData.append('pwd', this.state.password);
    formData.append('phone', this.state.mobile);
    formData.append('address', this.state.address);
    formData.append('locality', this.state.locality);
    formData.append('usertype', this.state.password);

    const promise = fetch('http://192.168.1.8:8888/covid/covidsignup.php', {
      method: 'POST',
      body: formData,
    });
    promise
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        if (response.error === 'false') {
          this.props.navigation.navigate('Home');
        } else {
          Toast.show({
            text: response.message,
            buttonText: 'Okay',
          });
        }
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
