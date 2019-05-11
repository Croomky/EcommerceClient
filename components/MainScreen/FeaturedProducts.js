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

        // console.log(featuredProductList);

        for (var i = 0; i < featuredProductList.length; i++) {
          componentList.push(
            self.jsonToComponent(featuredProductList[i], i)
          );
          console.log(featuredProductList);
          // console.log(componentList[i]);
        }

        // self.setState({
        //   productsList: componentList,
        // })

        // console.log("componentList: " + componentList);

        self.setState({
          productsList: componentList
        });
      });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SearchBar style={styles.searchBar} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {this.state.productsList}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    paddingTop: 5,
    alignItems: 'center'
  },
  scrollView: {
    width: '100%',
  },
  contentContainerStyle: {
    paddingTop: 15,
    width: '100%',
    alignItems: 'center'
  },
  searchBar: {
    flex: 1,
  }
});