import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';

import Header from './components/Header';
import Menu from './components/Menu';
import FeaturedProducts from './components/MainScreen/FeaturedProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <NativeRouter>
          <Switch>
            <Route exact path='/' component={ FeaturedProducts } />
            <Route path='/productDetails' component={ ProductDetails } />
          </Switch>
        </NativeRouter>
        <Menu></Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
});
