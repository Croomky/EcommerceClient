import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartItems: [

      ]
    }
  }

  fetchShoppingCartItems() {

  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          My shopping cart
        </Text>
        {/* shopping cart items list */}
        <Text style={styles.summary}>

        </Text>
        {/* make an order button */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
  },
  summary: {
    
  }
})