import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProductItem from './ProductItem';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          name: 'Product 1',
          price: '39,99 zl',
          description: 'Short description of the product.'
        },
        {
          name: 'Product 2',
          price: '59,99 zl',
          description: 'Short description of the second product.'
        },
      ]
    }
  }

  fetchProducts() {
    this.setState({
      productList: [
        {
          name: 'Product 1',
          price: '39,99 zl',
          description: 'Short description of the product.'
        },
        {
          name: 'Product 2',
          price: '59,99 zl',
          description: 'Short description of the second product.'
        },
      ]
    });
  }

  createProductItemsFromState() {
    const productItems = this.state.productList.map((product, index) => (
      <ProductItem
        key={index}
        name={product.name}
        price={product.price}
      />
    ));
    
    console.log(productItems);

    return productItems;
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.createProductItemsFromState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    width: '90%',
  }
})