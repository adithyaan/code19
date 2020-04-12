import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Toast} from 'native-base';
import Config from '../../assets/config/config';

export default class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };
  static navigationOptions = {
    headerMode: 'none',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>#weUnite</Text>
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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.signIn()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  signIn = () => {
    let formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('pwd', this.state.password);
    const promise = fetch(Config.signInApi, {
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
