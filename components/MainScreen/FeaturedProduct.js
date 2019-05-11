import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import ScaledImage from '../ScaledImage';
import Utils from '../Utils';

export default class FeaturedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.imageUrl,
    };
  }

  render() {
    return (
      <Link to="/productDetails">
        <View style={styles.mainContainer}>
          {/* <ScaledImage uri={this.props.imageUrl} width={300} /> */}
          <Image
            source={{ uri: this.props.imageUrl }}
            style={{height: 280, width: 280 }}
          />
          <View style={styles.namePriceRow}>
            <Text style={styles.productTitle}>
              {this.props.productTitle}
            </Text>
            <Text style={styles.productPrice}>
              {Utils.parsePrice(this.props.price)}
            </Text>
          </View>
        </View>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    marginBottom: 20,
  },
  namePriceRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '400',
  }
});