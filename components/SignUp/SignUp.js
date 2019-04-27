import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import ColorsPalette from '../ColorsPalette';
import StylizedButton from '../StylizedButton';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  validatePassword() {
    if(this.state.password == this.state.confirmPassowrd) {
      return true;
    } else {
      return false;
    }
  }

  postFormData(state) {
    if(!this.validatePassword()) {
      return;
    }

    fetch('http://192.168.0.103:8000/user/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password
      }),
    }).then(function(res) {
      return res.json();
    }).then(function(json) {
      if(json.answer == 'ok') {
        console.log('SUCCESS');
      } else if(json.answer == 'no') {
        console.log('FAILURE');
      }
    }).catch(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Sign up
        </Text>
        <TextInput
          style={styles.field}
          placeholder={"E-mail"}
          autoCapitalize={"none"}
          onChangeText={ (text) => this.setState({email: text}) }
        />
        <TextInput
          style={styles.field}
          placeholder={"Password"}
          autoCapitalize={"none"}
          secureTextEntry={true}
          onChangeText={ (text) => this.setState({password: text}) }
        />
        <TextInput
          style={styles.field}
          placeholder={"Confirm password"}
          autoCapitalize={"none"}
          secureTextEntry={true}
          onChangeText={ (text) => this.setState({confirmPassword: text}) }
        />
        <StylizedButton
          title={"Sign up"}
          onPress={this.postFormData.bind(this.state)}
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