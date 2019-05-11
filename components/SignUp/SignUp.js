import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import ColorsPalette from '../ColorsPalette';
import StylizedButton from '../StylizedButton';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
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
        />
        <TextInput
          style={styles.field}
          placeholder={"Password"}
        />
        <TextInput
          style={styles.field}
          placeholder={"Confirm password"}
        />
        <StylizedButton
          title={"Sign up"}
          onPress={() => {}}
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