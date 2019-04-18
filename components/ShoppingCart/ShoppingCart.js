import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import ShoppingCartItem from './ShoppingCartItem';
import StylizedButton from '../StylizedButton';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartItems: [],
      totalPrice: 0
    }
  }

  fetchShoppingCartItems() {
    this.setState({
      shoppingCartItems: [
        <ShoppingCartItem
          key={1}
        />,
        <ShoppingCartItem
          key={2}
        />,
        <ShoppingCartItem
          key={3}
        />
      ]
    })
  }

  componentDidMount() {
    this.fetchShoppingCartItems();
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.title}>
          My shopping cart
        </Text>
        {this.state.shoppingCartItems}
        <Text style={styles.summary}>
          Summary: {this.state.totalPrice} zł
        </Text>
        <StylizedButton
          title={'Make an order'}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginVertical: 20
  },
  summary: {
    marginVertical: 20,
    width: '80%',
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '500'
  }
})