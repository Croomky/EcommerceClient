import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { NativeRouter, Router, Route, Link, Switch } from 'react-router-native';
import { createMemoryHistory } from 'history';

import Header from './components/Header';
import Menu from './components/Menu';
import History from './components/History';
import FeaturedProducts from './components/MainScreen/FeaturedProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Categories from './components/Categories/Categories';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductList from './components/ProductList/ProductList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // const history = createMemoryHistory();
    // const location = history.location;

    // const unlisten = history.listen((location, action) => {
    //   console.log(action, location.pathname, location.state);
    // });

    // this.history = History;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress() {
    History.goBack();
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Router history={History}>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={ FeaturedProducts } />
            <Route path='/productList' component={ ProductList } />
            <Route path='/productDetails' component={ ProductDetails } />
            <Route path='/categories' component={ Categories } />
            <Route path='/signIn' component={ SignIn } />
            <Route path='/signUp' component={ SignUp } />
            <Route path='/profile' component={ Profile } />
          </Switch>
          <Menu></Menu>
        </Router>
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
