import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
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
      <View>
        <ScaledImage uri={this.state.imageUrl} width={300} />
        <Text>{this.props.productTitle}</Text>
      </View>
    );
  }
}