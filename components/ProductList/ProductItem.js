import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.thumbnail}
          source={{ uri: 'https://via.placeholder.com/32' }}
        />
        <Text style={styles.name}>
          {this.props.name}
        </Text>
        <Text style={styles.price}>
          {this.props.price}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  thumbnail: {
    width: 32,
    height: 32,
  }
})