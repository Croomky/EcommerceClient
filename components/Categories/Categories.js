import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

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
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
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
  },
  scrollViewContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
})