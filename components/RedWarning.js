import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';


export default class RedWarning extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTextMessages() {
    const msgArray = this.props.messages.map((msg, index) => (<Text key={index}>{msg}</Text>));
    return msgArray;
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderTextMessages()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '66%',
    marginBottom: 10,
  }
});