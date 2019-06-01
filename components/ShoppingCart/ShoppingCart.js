import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import ShoppingCartItem from './ShoppingCartItem';
import StylizedButton from '../StylizedButton';
import SessionIdHandler from '../SessionIdHandler';
import NetworkConfig from '../NetworkConfig';
import { pushId, getProductIdArray, registerShoppinigCartComponent } from './ShoppingCartHandler';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartItems: [],
      totalPrice: 0,
      msg: ''
    }
  }

  fetchShoppingCartItems() {
    var self = this;

    Promise.all(getProductIdArray().map(id => 
      fetch(NetworkConfig.RestApiAddress + '/product/details/' + id, {
        headers: {
          Cookie: 'sessiondId=' + SessionIdHandler.sessionId
        }
    }).then(function(response) {
      return response.json();
    }))).then(function(values) {
      const newShoppingCartItems = values.map(function(item) {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          thumbnail: item.thumbnail,
        }
      });
      self.setState({
        shoppingCartItems: newShoppingCartItems,
        totalPrice: self.calculateTotalPrice(newShoppingCartItems)
      });
    });
  }

  jsonToShoppingCartItemArray(jsonArray) {
    return jsonArray.map(function(item) {
      return <ShoppingCartItem
        id={item.id}
        name={item.name}
        price={item.price}
        thumbnail={item.thumbnail}
      />
    });
  }

  calculateTotalPrice(jsonArray) {
    var totalPrice = 0;

    jsonArray.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }

  removeProduct(id) {
    var newShoppingCartItems = this.state.shoppingCartItems;
    var self = this;

    newShoppingCartItems.forEach((item, index) => {
      if(item.id == id) {
        newShoppingCartItems.splice(index, 1);
        console.log(newShoppingCartItems);
        console.log(index);
        self.setState({
          shoppingCartItems: newShoppingCartItems,
          totalPrice: self.calculateTotalPrice(newShoppingCartItems)
        });
      }
    });

    this.forceUpdate();
  }

  componentDidMount() {
    this.fetchShoppingCartItems();
    registerShoppinigCartComponent(this);
    console.log(getProductIdArray());
  }

  getMessage() {
    if(this.state.shoppingCartItems.length != 0) {
      return;
    } else {
      return (
        <View style={styles.msg}>
          <Text>
            No items in shopping cart. Feel free to add something.
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.title}>
          My shopping cart
        </Text>
        {this.jsonToShoppingCartItemArray(this.state.shoppingCartItems)}
        {this.getMessage()}
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
    paddingBottom: 20
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
  },
  msg: {
    borderColor: '#f5c6cb',
    color: '#721c24',
    backgroundColor: '#f8d7da',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '80%'
  }
})