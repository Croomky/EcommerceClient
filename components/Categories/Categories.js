import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import SearchBar from '../SearchBar';
import Category from './Category';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.categoriesList = [];
    this.prepareCategories();
  }

  fetchCategories() {
    return [
      "Clothes",
      "Electronics",
      "Toys",
      "Sports",
      "Literature",
    ];
  }

  prepareCategories() {
    const categoriesNames = this.fetchCategories();

    categoriesNames.forEach((name, index) => {
      this.categoriesList.push(
        <Category
          key={index}
          name={name}
          logoUrl={""}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      <SearchBar style={styles.searchBar} />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {this.categoriesList}
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