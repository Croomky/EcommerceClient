import React from 'react';
import ReactDOM from 'react-native';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { Link } from 'react-router-native';
// import { Button } from 'react-native-elements';

import ScaledImage from '../ScaledImage';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  }

  render() {
    return (
      <View>
        <ScaledImage
          uri={this.state.source}
          width={300}
        ></ScaledImage>
        <Text style={styles.productTitle}>Example product</Text>
        <View style={styles.priceBuyRow}>
          <Text style={styles.price}>
            39,99 zł
          </Text>
          {/* LINK TO BUY PAGE */}
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium non aliquam mollitia ea exercitationem, dicta voluptas magnam corporis nisi reprehenderit ab tempora voluptatibus assumenda, vitae nulla doloremque, eveniet quos ut tempore numquam eius modi. Amet ducimus expedita non eos, modi blanditiis dignissimos possimus reprehenderit tempore neque dolor pariatur ipsum error. Nihil, blanditiis sequi aliquid iure natus aliquam ullam minus adipisci corrupti impedit perferendis excepturi fuga dolorem officia fugit. Consectetur ea fugiat voluptas exercitationem voluptates blanditiis sit, obcaecati rerum nam dignissimos eveniet est quo suscipit asperiores consequuntur molestiae enim numquam neque culpa accusamus ipsum in distinctio maxime explicabo? Perferendis, consequuntur!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productTitle: {
    fontSize: 15,
  },
  priceBuyRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 11
  },
  buyBtn: {

  },
  description: {

  }
})