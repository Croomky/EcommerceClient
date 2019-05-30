import React from 'react';
import ReactDOM from 'react-native';
import { StyleSheet, View, Image, Text, Button, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
// import { Button } from 'react-native-elements';

import StylizedButton from '../StylizedButton';
import ScaledImage from '../ScaledImage';
import ColorsPalette from '../ColorsPalette';
import NetworkConfig from '../NetworkConfig';
import History from '../History'

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: '',
        name: '',
        price: '',
        thumbnail: ''
      }
    };
  }

  fetchProductById(productId) {
    var self = this;

    fetch(NetworkConfig.RestApiAddress + '/product/details/' + productId)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log('object', data);
        self.setState({
          product: data
        });
      }).catch(function(err) {
        console.log(err);
      });
  }

  getProductIdFromParams() {
    const productId = History.location.search.split('=')[1];
    console.log(History.location);
    return productId;
  }

  getThumbnailAddress(thumbnailName) {
    return NetworkConfig.RestApiAddress + '/static/' + thumbnailName;
  }

  componentDidMount() {
    const id = this.getProductIdFromParams();
    console.log('id', id);
    this.fetchProductById(id);
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={styles.mainContainer}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {/* <ScaledImage
            uri={this.state.source}
            width={300}
          ></ScaledImage> */}
        <View style={styles.productView}>
          <Image
            source={{ uri: this.getThumbnailAddress(this.state.product.thumbnail) }}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={styles.productTitle}>
            {this.state.product.name}
          </Text>
          <View style={styles.priceBuyRow}>
            <Text style={styles.price}>
              {this.state.product.price}
            </Text>
            <Link to='#'>
              <StylizedButton
                title={"Buy"}
                onPress={() => {}}
              />
            </Link>
          </View>
          <Text style={styles.description}>
            {this.state.product.body}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    width: '100%',
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  productView: {
    width: '80%'
  },
  productTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  priceBuyRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 18,
    fontWeight: '400'
  },
  buyBtn: {
    backgroundColor: ColorsPalette.main,
    borderRadius: 5,
    padding: 10
  },
  buyBtnText: {
    fontSize: 14,
    color: ColorsPalette.brightText,
  },
  description: {
    marginTop: 20,
    fontSize: 13
  }
})