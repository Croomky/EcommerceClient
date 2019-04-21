import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import FeaturedProduct from './FeaturedProduct';
import SearchBar from '../SearchBar';
import NetworkConfig from '../NetworkConfig';

export default class FeaturedProducts extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  fetchFeaturedProducts() {
    var self = this;

    return new Promise(function(resolve, reject) {
      fetch(NetworkConfig.RestApiAddress + '/product/featuredProductList')
      .then(function(res) {
        return res.json();
      }).then(function(data) {
        resolve(data);
      }).catch(function(err) {
        console.log("Error in fetchFeaturedProducts: " + err);
        reject(null);
      });
    }).catch(function(err) {
      console.log(err);
    });
  }

  jsonToComponent(obj, index) {
    return (
      <FeaturedProduct
        key={index}
        productTitle={obj.name}
        price={obj.price}
        imageUrl={NetworkConfig.RestApiAddress + "/static/" + obj.thumbnail}
      />
    )
  }

  componentDidMount() {
    var self = this;

    this.fetchFeaturedProducts()
      .then(function(featuredProductList) {
        var componentList = [];

        console.log(featuredProductList);

        for (var i = 0; i < featuredProductList.length; i++) {
          componentList.push(
            self.jsonToComponent(featuredProductList[i], i)
          );
          console.log(componentList[i]);
        }

        // self.setState({
        //   productsList: componentList,
        // })

        console.log("componentList: " + componentList);

        self.setState({
          productsList: componentList
        });
      });
  }

  render() {
    return (
      <View style={styles.featuredProducts}>
        <SearchBar style={styles.searchBar} />
        <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: 'center'}}>
          {this.state.productsList}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  featuredProducts: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 5
  },
  product: {
    width: 300,
    overflow: 'hidden'
  },
  productImage: {
  },
  scrollView: {
    width: '100%',
  },
  searchBar: {
    flex: 1,
  }
});