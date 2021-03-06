import React from 'react';
import ReactDOM from 'react-native';
import { StyleSheet, View, Image, Text, Button, ScrollView, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';
// import { Button } from 'react-native-elements';

import StylizedButton from '../StylizedButton';
import ScaledImage from '../ScaledImage';
import ColorsPalette from '../ColorsPalette';
import NetworkConfig from '../NetworkConfig';
import History from '../History'
import { pushId, isInCart } from '../ShoppingCart/ShoppingCartHandler';
import SessionIdHandler from '../SessionIdHandler';
import Utils from '../Utils';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: '',
        name: '',
        price: '',
        thumbnail: ''
      },
      thumbnailUri: this.getThumbnailUriFromParams(this.props.thumbnailUri)
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
          product: data,
          thumbnailUri: self.getThumbnailAddress(data.thumbnail)
        });
        // self.forceUpdate();
      }).catch(function(err) {
        console.log(err);
      });
  }

  getProductIdFromParams() {
    var productId = History.location.search.split('=')[1];
    productId = productId.split('&')[0];
    // console.log(History.location);
    return productId;
  }

  getThumbnailAddress(thumbnailName) {
    return (NetworkConfig.RestApiAddress + '/static/' + thumbnailName);
  }

  getThumbnailUriFromParams() {
    var thumbnailUri = History.location.search.split('=')[2];
    console.log('parsed thumbnailUri', thumbnailUri);
    return thumbnailUri;
  }

  componentDidMount() {
    const id = this.getProductIdFromParams();
    // console.log('id', id);
    this.fetchProductById(id);
  }

  renderAddToCartButton() {
    if(isInCart(this.state.product.id)) {
      return (
        <Link to='/shoppingCart'>
          <Text style={styles.addedToCartText}>
            Added to cart
          </Text>
        </Link>
      );
    }
    else if(SessionIdHandler.sessionId != '') {
      return (
        <Link to='#'>
          <StylizedButton
            title={"Add to cart"}
            onPress={() => { pushId(this.state.product.id); this.forceUpdate(); }}
          />
        </Link>
      );
    } else {
      return (
        <Link to='/signIn'>
          <Text style={styles.signInText}>
            Sign in to use cart
          </Text>
        </Link>
      )
    }
  }

  render() {
    console.log('pre render state', this.state);
    const thumbnailU = this.state.thumbnailUri;
    return (
      <ScrollView style={styles.mainContainer}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.productView}>
          {/* <Image
            source={{ uri: this.getThumbnailAddress(this.state.product.thumbnail) }}
            style={{ width: '100%', height: 200 }}
          /> */}
          <ScaledImage
            uri={thumbnailU}
            width={290}
          />
          <Text style={styles.productTitle}>
            {this.state.product.name}
          </Text>
          <View style={styles.priceBuyRow}>
            <Text style={styles.price}>
              {Utils.parsePrice(this.state.product.price)}
            </Text>
           {this.renderAddToCartButton()}
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
  },
  signInText: {
    color: ColorsPalette.main,
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  addedToCartText: {
    color: ColorsPalette.main,
    fontSize: 12,
  }
});