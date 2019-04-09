import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import FeaturedProduct from './FeaturedProduct';
import SearchBar from '../SearchBar';

export default class FeaturedProducts extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  fetchFeaturedProducts() {
    var self = this;

    return new Promise(function(resolve, reject) {
      fetch('http://192.168.0.103:8000/product/featuredProductList')
      .then(function(res) {
        return res.json();
      }).then(function(data) {
        resolve(data);
      }).catch(function(err) {
        console.log("Error in fetchFeaturedProducts: " + err);
        reject(null);
      });
    })
  }

  jsonToComponent(obj, index) {
    return (
      <FeaturedProduct
        key={index}
        productTitle={obj.name}
        imageUrl={"http://192.168.0.103:8000/static/" + obj.thumbnail}
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

        self.setState({
          productsList: componentList,
        })

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