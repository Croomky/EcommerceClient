import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.thumbnail}
          source={{ uri: 'https://static.pexels.com/photos/355296/pexels-photo-355296.jpeg'}}
        />
        <View style={styles.namePriceRow}>
          <Text style={styles.productName}>
            Product's name
          </Text>
          <Text style={styles.price}>
            39,99 zl
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 20
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  namePriceRow: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: 'space-between'
  },
  productName: {
    fontSize: 16,
    fontWeight: '400'
  },
  price: {
    width: '100%',
    textAlign: 'right'
  }
})