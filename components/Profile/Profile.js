import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

import StylizedButton from '../StylizedButton';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.title}>
          User information
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder={"First name"}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Last name"}
          value={this.state.lastName}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"E-mail"}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Phone number"}
          value={this.state.phoneNumber}
        />
        <Text style={styles.title}>
          Address
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder={"Country"}
          value={this.state.country}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Region/voivodeship"}
          value={this.state.region}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"City"}
          value={this.state.city}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Post code"}
          value={this.state.postCode}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Address line 1"}
          value={this.state.address1}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Address line 2"}
          value={this.state.address2}
        />
        <StylizedButton style={styles.saveBtn}
          title={"Save"}
          onPress={() => {}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    width: '100%',
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 20
  },
  title: {
    marginVertical: 20,
    fontSize: 32,
    fontWeight: '400',
    // alignItems: 'center'
  },
  inputField: {
    width: '80%',
    fontSize: 16,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  saveBtn: {
    fontSize: 16
  }
})