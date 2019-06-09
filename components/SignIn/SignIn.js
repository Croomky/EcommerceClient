import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import ColorsPalette from '../ColorsPalette';
import StylizedButton from '../StylizedButton';
import NetworkConfig from '../NetworkConfig';
import SessionIdHandler from '../SessionIdHandler';
import History from '../History';
import { getValidSigningRedirect } from '../History';
// import { menuComponentInstance } from '../History';
import Menu from '../Menu';
// import menuRefresher from '../MenuRefresher';
import RedWarning from '../RedWarning';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      msg: ''
    };
  }

  postCredentials(username, password) {
    console.log('USERNAME: ', username);
    console.log('PASSWORD: ', password);
    var self = this;

    fetch(NetworkConfig.RestApiAddress + '/user/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: 'same-origin',
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(function(res) {
      // console.log('Response object:');
      // console.log(res);
      SessionIdHandler.setSessionIdFromResponse(res);
      //console.log(SessionIdHandler.sessionId);
      return res.json();
    }).then(function(json) {
        if(json.answer == 'ok') {
          console.log('SUCCESS');
          History.go(getValidSigningRedirect());
        } else if(json.answer == 'no') {
          self.setState({
            msg: 'Login or password incorrect.'
          })
          console.log('FAILURE');
        }
    }).catch(function(err) {
      console.log(err);
    })
  }

  renderErrorMessage() {
    if(this.state.msg != '') {
      return <RedWarning messages={[this.state.msg]} />
    } else {
      return;
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Sign in
        </Text>
        {this.renderErrorMessage()}
        <TextInput
          style={styles.field}
          placeholder={"E-mail"}
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