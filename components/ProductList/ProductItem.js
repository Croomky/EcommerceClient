import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Utils from '../Utils';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Link
          to={{
            pathname: '/productDetails',
            search: '?productId=' + this.props.id + '&thumbnailUri=' + this.props.thumbnail
          }}
        >
          <Image
            style={styles.thumbnail}
            source={{ uri: this.props.thumbnail }}
          />
        </Link>
        <View style={styles.productContent}>
          <View style={styles.namePriceRow}>
            <Text style={styles.name}>
              {this.props.name}
            </Text>
            <Text style={styles.price}>
              {/* {this.props.price} */}
              {Utils.parsePrice(this.props.price)}
            </Text>
          </View>
          <Text style={styles.productDescription}>
            lorem ipsum dolor sit amet...
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    height: 100,
    marginVertical: 5
  },
  productContent: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  namePriceRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 5
  },
  name: {
    fontSize: 19
  },
  price: {
    fontSize: 19
  },
  productDescription: {
    flex: 2,
    marginTop: 5,
    fontSize: 15
  }
})