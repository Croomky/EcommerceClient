import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NetworkConfig from '../NetworkConfig';
import ColorsPalette from '../ColorsPalette';
import { removeItem } from './ShoppingCartHandler';
import Utils from '../Utils';

export default class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.thumbnail}
          source={{ uri: NetworkConfig.RestApiAddress + '/static/' + this.props.thumbnail }}
        />
        <View style={styles.namePriceRow}>
          <Text style={styles.productName}>
            {this.props.name}
          </Text>
          <View style={styles.priceRemoveColumn}>
            <Icon name="close" size={20} color={ColorsPalette.darkText} onPress={() => removeItem(this.props.id)} />
            <Text style={styles.price}>
              {Utils.parsePrice(this.props.price)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 20
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  namePriceRow: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 5,
    justifyContent: 'space-between'
  },
  priceRemoveColumn: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  productName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400'
  },
  price: {
    width: '100%',
    textAlign: 'right'
  }
})