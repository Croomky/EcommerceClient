import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import FeaturedProduct from './FeaturedProduct';
// import SearchBar from './SearchBar';

export default class FeaturedProducts extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  fetchFeaturedProducts() {
    //fetch featured products from rest api
    //following products are hardcoded examples
    this.setState({
      productsList: [
        <FeaturedProduct
          key={1}
          imageUrl={'https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
          productTitle={'example product'}
        />,
        <FeaturedProduct
          key={2}
          imageUrl={'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?cs=srgb&dl=bottle-breakfast-clean-248412.jpg&fm=jpg'}
          productTitle={'milk'}
        />,
        <FeaturedProduct
          key={3}
          imageUrl={'https://images.pexels.com/photos/256298/pexels-photo-256298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
          productTitle={'another example'}
        />
      ]
    });
  }

  componentWillMount() {
    this.fetchFeaturedProducts();
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