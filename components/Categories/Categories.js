import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

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

    categoriesNames.forEach(name => {
      this.categoriesList.push(
        <View style={styles.categoryTile}>
          <Text style={styles.categoryName}>
            {name}
          </Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryTile: {
    borderBottomColor: "black",
  },
  categoryName: {
    fontSize: 19,
  }
})