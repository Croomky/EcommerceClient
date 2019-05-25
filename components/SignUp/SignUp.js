import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import ColorsPalette from '../ColorsPalette';
import StylizedButton from '../StylizedButton';
import NetworkConfig from '../NetworkConfig';
import History from '../History';
import { getValidSigningRedirect } from '../History';
import SessionIdHandler from '../SessionIdHandler';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      msg: ''
    }
  }

  renderAlertMsg() {
    if(this.state.msg) {
      return (
        <Text>
          {this.state.msg}
        </Text>
      )
    } else {
      return;
    }
  }

  validatePassword() {
    if(this.state.password == this.state.confirmPassword) {
      this.setState({
        is_validated: true
      });
    } else {
      this.setState({
        is_validated: false
      });
    }
  }

  validateEmail(email) {
    const email_regexp = /.*@.*[.].*/;
    return email_regexp.test(email)
  }

  signUpPressed(email, password, confirmPassword, validateEmailCallback) {
    var self = this;
    if(!validateEmailCallback(email)) {
      this.setState({
        msg: 'error'
      })
    }
    if(password == confirmPassword) {
      console.log('VALIDATEd!')
      fetch(NetworkConfig.RestApiAddress + '/user/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      }).then(function(res) {
        return res.json();
      }).then(function(json) {
        if(json.answer == 'ok') {
          console.log('SUCCESS');
          // History.go(getValidSigningRedirect());
          self.postCredentials(email, password);
        } else if(json.answer == 'no') {
          console.log('FAILURE');
        } else {
          console.log(json);
        }
      }).catch(function(err) {
        console.log(err);
      });
    } else {
      console.log('NOT VALIDATEd!')
    }
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
      SessionIdHandler.setSessionIdFromResponse(res);
      return res.json();
    }).then(function(json) {
      if(json.answer == 'ok') {
        console.log('SUCCESS');
        History.go(getValidSigningRedirect());
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
          Sign up
        </Text>
        {this.renderAlertMsg()}
        <TextInput
          style={styles.field}
          value={this.state.email}
          placeholder={"E-mail"}
          autoCapitalize={"none"}
          onChangeText={ (text) => this.setState({email: text}) }
        />
        <TextInput
          style={styles.field}
          value={this.state.password}
          placeholder={"Password"}
          autoCapitalize={"none"}
          secureTextEntry={true}
          onChangeText={ (text) => this.setState({password: text}) }
        />
        <TextInput
          style={styles.field}
          value={this.state.confirmPassword}
          placeholder={"Confirm password"}
          autoCapitalize={"none"}
          secureTextEntry={true}
          onChangeText={ (text) => this.setState({confirmPassword: text}) }
        />
        <StylizedButton
          title={"Sign up"}
          onPress={this.signUpPressed.bind(this,
            this.state.email,
            this.state.password,
            this.state.confirmPassword,
            this.validateEmail
            )}
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