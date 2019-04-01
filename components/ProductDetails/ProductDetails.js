import React from 'react';
import ReactDOM from 'react-native';
import { StyleSheet, View, Image, Text, Button, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
// import { Button } from 'react-native-elements';

import ScaledImage from '../ScaledImage';
import ColorsPalette from '../ColorsPalette';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
          {/* <ScaledImage
            uri={this.state.source}
            width={300}
          ></ScaledImage> */}
          <Image
            source={{ uri: this.state.source }}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={styles.productTitle}>Example product</Text>
          <View style={styles.priceBuyRow}>
            <Text style={styles.price}>
              39,99 zł
            </Text>
            <Link to='#'>
              <View style={styles.buyBtn}>
                <Text style={styles.buyBtnText}>Buy</Text>
              </View>
            </Link>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium non aliquam mollitia ea exercitationem, dicta voluptas magnam corporis nisi reprehenderit ab tempora voluptatibus assumenda, vitae nulla doloremque, eveniet quos ut tempore numquam eius modi. Amet ducimus expedita non eos, modi blanditiis dignissimos possimus reprehenderit tempore neque dolor pariatur ipsum error. Nihil, blanditiis sequi aliquid iure natus aliquam ullam minus adipisci corrupti impedit perferendis excepturi fuga dolorem officia fugit. Consectetur ea fugiat voluptas exercitationem voluptates blanditiis sit, obcaecati rerum nam dignissimos eveniet est quo suscipit asperiores consequuntur molestiae enim numquam neque culpa accusamus ipsum in distinctio maxime explicabo? Perferendis, consequuntur!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
  },
  scrollView: {
    width: '100%',
  },
  scrollViewContainer: {
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingHorizontal: 35,
  },
  productTitle: {
    fontSize: 19,
  },
  priceBuyRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 15
  },
  buyBtn: {
    backgroundColor: ColorsPalette.main,
    borderRadius: 5,
    padding: 10
  },
  buyBtnText: {
    fontSize: 15,
    color: ColorsPalette.brightText,
  },
  description: {

  }
})