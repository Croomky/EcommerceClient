import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import ColorsPalette from '../ColorsPalette';
import StylizedButton from '../StylizedButton';
import NetworkConfig from '../NetworkConfig';
import SessionIdHandler from '../SessionIdHandler';
import sessionIdHandler from '../SessionIdHandler';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
    };
  }

  postCredentials(username, password) {
    console.log('USERNAME: ', username)
    console.log('PASSWORD: ', password)

    fetch(NetworkConfig.RestApiAddress + '/user/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(function(res) {
      // console.log('Response object:');
      // console.log(res);
      SessionIdHandler.setSessionIdFromResponse(res);
      console.log(sessionIdHandler.sessionId);
      return res.json();
    }).then(function(json) {
        if(json.answer == 'ok') {
          console.log('SUCCESS');
        } else if(json.answer == 'no') {
          console.log('FAILURE');
        }
    }).catch(function(err) {
      console.log(err);
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Sign in
        </Text>
        <TextInput
          style={styles.field}
          placeholder={"Username or e-mail"}
          value={this.state.username}
          onChangeText={ (text) => this.setState({username: text}) }
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.field}
          placeholder={"Password"}
          value={this.state.password}
          onChangeText={ (text) => this.setState({password: text}) }
          secureTextEntry={true}
          autoCapitalize={"none"}
        />
        <StylizedButton
          title={"Sign in"}
          onPress={this.postCredentials.bind(
            this,
            this.state.username,
            this.state.password)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginVertical: 20,
    fontSize: 32,
    fontWeight: '400',
  },
  field: {
    width: '80%',
    fontSize: 16,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
})