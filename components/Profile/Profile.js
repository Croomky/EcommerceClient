import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

import StylizedButton from '../StylizedButton';
import NetworkConfig from '../NetworkConfig';
import SessionIdHandler from '../SessionIdHandler';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {}
    };
  }

  fetchProfile() {
    var self = this;
    fetch(NetworkConfig.RestApiAddress + '/user/profile', {
      headers: {
        'Cookie': 'sessionid=' + SessionIdHandler.sessionId
      }
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data[0]);
      self.setState({
        profileData: data[0]
      })
    }).catch(function(err) {
      console.error(err);
    });
  }

  componentDidMount() {
    this.fetchProfile();
  }

  postProfileInfo(data) {
    console.log(data);
    fetch(NetworkConfig.RestApiAddress + '/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'sessionid=' + SessionIdHandler.sessionId
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('answer after posting profile info', data);
    }).catch(function(err) {
      console.error(err);
    });
  }

  modifyProfileData(property, value) {
    var newProfileData = this.state.profileData;
    newProfileData[property] = value;
    this.setState({
      profileData: newProfileData
    });
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
          value={this.state.profileData.first_name}
          onChangeText={
            (text) => {this.modifyProfileData('first_name', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Last name"}
          value={this.state.profileData.last_name}
          onChangeText={
            (text) => {this.modifyProfileData('last_name', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"E-mail"}
          value={this.state.profileData.email}
          onChangeText={
            (text) => {this.modifyProfileData('email', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Phone number"}
          value={this.state.profileData.phone_number}
          onChangeText={
            (text) => {this.modifyProfileData('phone_number', text)}}
        />
        <Text style={styles.title}>
          Address
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder={"Country"}
          value={this.state.profileData.country}
          onChangeText={
            (text) => {this.modifyProfileData('country', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Region/voivodeship"}
          value={this.state.profileData.region}
          onChangeText={
            (text) => {this.modifyProfileData('region', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"City"}
          value={this.state.profileData.city}
          onChangeText={
            (text) => {this.modifyProfileData('city', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Post code"}
          value={this.state.profileData.post_code}
          onChangeText={
            (text) => {this.modifyProfileData('post_code', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Address line 1"}
          value={this.state.profileData.address_line_1}
          onChangeText={
            (text) => {this.modifyProfileData('address_line_1', text)}}
        />
        <TextInput
          style={styles.inputField}
          placeholder={"Address line 2"}
          value={this.state.profileData.address_line_2}
          onChangeText={
            (text) => {this.modifyProfileData('address_line_2', text)}}
        />
        <StylizedButton style={styles.saveBtn}
          title={"Save"}
          onPress={this.postProfileInfo.bind(this, this.state.profileData)}
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