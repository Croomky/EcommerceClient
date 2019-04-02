import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.thumbnail}
          source={{ uri: ''}}
        />
        <Text style={styles.productName}>
          Product's name
        </Text>
        <Text style={styles.price}>
          39,99 zl
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  thumbnail: {
    width: 32,
    height: 32,
  }
})