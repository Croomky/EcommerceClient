import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import ProductItem from './ProductItem';
import History from '../History';
import NetworkConfig from '../NetworkConfig';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    // console.log('props.phrase: ');
    // console.log(props.phrase);
    this.state = {
      productList: [
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


  fetchProductsByPhrase(phrase) {
    var self = this;

    fetch(NetworkConfig.RestApiAddress + '/product/search?q=' + phrase)
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJson) {
        self.setState({
          productList: responseJson.map((element, index) => {
            return (<ProductItem
                key={element.id}
                name={element.name}
                price={element.price}
              />);
          })
        });
        console.log(self.state.productList);
      });
  }

  parseSearch(searchAttr) {
    return searchAttr.split('=')[1];
  }

  jsonArrayToComponentArray(jsonArray) {
    return jsonArray.map((element, index) => {
      <ProductItem
          key={element.id}
          name={element.name}
          price={element.price}
        />
    });
  }

  componentDidMount() {
    const searchAttr = History.location.search;
    console.log('SEARCHATTR:', searchAttr);
    searchAttr ? this.fetchProductsByPhrase(this.parseSearch(searchAttr)) : null;
  }

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
        {this.state.productList}
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