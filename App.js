import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';

import Header from './components/Header';
import Menu from './components/Menu';
import FeaturedProducts from './components/MainScreen/FeaturedProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Categories from './components/Categories/Categories';
// import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ProductList from './components/ProductList/ProductList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NativeRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={ ProductList } />
            <Route path='/productDetails' component={ ProductDetails } />
            <Route path='/categories' component={ Categories } />
          </Switch>
          <Menu></Menu>
        </NativeRouter>
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
