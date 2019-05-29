import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import ProductItem from './ProductItem';
import History from '../History';
import NetworkConfig from '../NetworkConfig';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
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
      }).then(function(responseJson) {
        self.setState({
          productList: self.jsonArrayToComponentArray(responseJson)
        });
      }).catch(function(err) {
        console.log('Couldn\'t fetch products by a phrase');
        console.log(err);
      });
  }

  fetchProductsByCategory(categoryId) {
    var self = this;

    fetch(NetworkConfig.RestApiAddress + '/product/byCategory/' + categoryId)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        self.setState({
          productList: self.jsonArrayToComponentArray(data)
        });
      }).catch(function(err) {
        console.log(err);
      });
  }

  parseSearch(searchAttr) {
    return searchAttr.split('=')[1];
  }

  getFirstParam(searchAttr) {
    return searchAttr.substring(searchAttr.indexOf('?')+1, searchAttr.indexOf('='));
  }

  getThumbnailAddress(thumbnailName) {
    return NetworkConfig.RestApiAddress + '/static/' + thumbnailName
  }

  jsonArrayToComponentArray(jsonArray) {
    var self = this;
    const productItemArray = jsonArray.map((element, index) => {
      return (<ProductItem
          key={element.id}
          name={element.name}
          price={element.price}
          thumbnail={self.getThumbnailAddress(element.thumbnail)}
        />);
    });

    console.log(jsonArray);
    return productItemArray;
  }

  componentDidMount() {
    const searchAttr = History.location.search;
    // console.log('SEARCHATTR:', searchAttr);
    const firstParam = this.getFirstParam(searchAttr);

    if(firstParam == 'categoryId') {
      this.fetchProductsByCategory(this.parseSearch(searchAttr));
    } else if(firstParam  == 'phrase') {
      this.fetchProductsByPhrase(this.parseSearch(searchAttr));
    }
  }

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