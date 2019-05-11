import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Redirect } from 'react-router-native';

import Palette from './ColorsPalette';
import History from './History';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NetworkConfig from './NetworkConfig';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchQueryResult(query) {
    var self = this;

    fetch(NetworkConfig.RestApiAddress + '/product/search?q=' + query)
      .then(function(response) {
        return response.json();
      })
      .then(function(queryResult) {
        console.log(JSON.stringify(queryResult));
        // finish
      });
  }

  redirectToProductList() {
    console.log('REDIRECT!');
    
    History.push({
      pathname: '/productList',
      search: '?phrase=a',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Icon name="magnify" size={20} color={Palette.darkText} />
          <TextInput
            placeholder="everything You want..."
            style={styles.textInput}
            onSubmitEditing={this.redirectToProductList}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
  },
  searchBar: {
    flexDirection: 'row',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Palette.darkText,
    borderRadius: 25,
    alignItems: 'center'
  },
  textInput: {
    flex: 2,
    height: 40,
    paddingLeft: 5
  }
});