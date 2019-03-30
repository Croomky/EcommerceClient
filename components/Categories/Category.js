import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.categoryTile}
      >
        <Text>logo</Text>
        <Text style={styles.categoryName}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryTile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    borderBottomColor: "black",
  },
  categoryName: {
    fontSize: 19,
  }
});