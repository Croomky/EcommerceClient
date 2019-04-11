import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

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
      ],
      preparedProductList: [
        <ProductItem
          key={1}
          name={'Product 1'}
          price={'39,99 zl'}
        />,
        <ProductItem
          key={2}
          name={'Product 2'}
          price={'59,99 zl'}
        />,
        <ProductItem
          key={3}
          name={'Product 1'}
          price={'39,99 zl'}
        />,
        <ProductItem
          key={4}
          name={'Product 2'}
          price={'59,99 zl'}
        />,
        <ProductItem
          key={5}
          name={'Product 1'}
          price={'39,99 zl'}
        />,
        <ProductItem
          key={6}
          name={'Product 2'}
          price={'59,99 zl'}
        />,
      ]
    }
  }

  // fetchProducts() {
  //   this.setState({
  //     productList: [
  //       {
  //         name: 'Product 1',
  //         price: '39,99 zl',
  //         description: 'Short description of the product.'
  //       },
  //       {
  //         name: 'Product 2',
  //         price: '59,99 zl',
  //         description: 'Short description of the second product.'
  //       },
  //     ]
  //   });
  // }

  // createProductItemsFromState() {
  //   const productItems = this.state.productList.map((product, index) => (
  //     <ProductItem
  //       key={index}
  //       name={product.name}
  //       price={product.price}
  //     />
  //   ));
    
  //   console.log(productItems);
  //   this.setState({
  //     preparedProductList: productItems
  //   });

  //   return productItems;
  // }

  // componentDidMount() {
  //   this.createProductItemsFromState();
  // }

  render() {
    return (
      <ScrollView style={styles.mainContainer}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {this.state.preparedProductList}
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
    paddingVertical: 5
  }
})