import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ColorsPalette from './ColorsPalette';

export default class StylizedButton extends TouchableOpacity {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}
      >
        <Text
          style={styles.buttonText}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorsPalette.main,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 18,
  },
  buttonText: {
    color: ColorsPalette.brightText,
    fontSize: 16,
    fontWeight: "400"
  }
})