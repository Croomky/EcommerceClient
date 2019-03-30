import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';

import Palette from './ColorsPalette';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/">
        <View style={styles.header}>
            <View>
              <Text style={styles.title}>TrueShop</Text>
            </View>
        </View>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.main,
    height: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Palette.brightText,
  }
});