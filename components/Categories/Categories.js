import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import SearchBar from '../SearchBar';
import Category from './Category';
import NetworkConfig from '../NetworkConfig';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: []
    }
  }

  fetchCategories() {
    var self = this;

    fetch(NetworkConfig.RestApiAddress + '/product/categoryList')
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      // console.log(data);
      self.setState({
        categoryList: self.jsonToCategoryList(data)
      });
    }).catch(function(err) {
      console.error(err);
    });
  }

  jsonToCategoryList(data) {
    var categoryComponentArray = [];

    data.forEach((categoryObject, index) => {
      categoryComponentArray.push(
        <Category
          key={index}
          id={categoryObject.id}
          name={categoryObject.name}
          logoUrl={NetworkConfig.RestApiAddress + '/static/' + categoryObject.name + '.png'}
        />
      );
    });

    return categoryComponentArray;
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      <SearchBar style={styles.searchBar} />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {this.state.categoryList}
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
  searchBar: {
    flex: 1,
  },
  scrollViewContainer: {
    width: '80%',
    paddingTop: 10,
    // paddingHorizontal: 20,
  },
})