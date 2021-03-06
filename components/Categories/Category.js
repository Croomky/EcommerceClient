import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'react-router-native';
import ColorsPalette from '../ColorsPalette';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        style={styles.link}
        to={{
          pathname: '/productList',
          search: '?categoryId=' + this.props.id
          }}
      >
        <View
          style={styles.categoryTile}
        >
          <Image
            source={{uri: this.props.logoUrl}}
            style={styles.logoImage}
          />
          <Text style={styles.categoryName}>
            {this.props.name}
          </Text>
        </View>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  categoryTile: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '100%',
    paddingTop: 20,
  },
  logoImage: {
    width: 32,
    height: 32,
  },
  categoryName: {
    flex: 2,
    fontSize: 20,
    color: ColorsPalette.darkText,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginLeft: 10,
  },
  link: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '100%',
    overflow: 'hidden'
  }
});