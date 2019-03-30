import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import ScaledImage from '../ScaledImage';

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
        <View>
          {/* <ScaledImage uri={this.props.imageUrl} width={300} /> */}
          <Image
            source={{ uri: this.props.imageUrl }}
            style={{height: 320, width: 320 }}
          />
          <Text>{this.props.productTitle}</Text>
        </View>
      </Link>
    );
  }
}