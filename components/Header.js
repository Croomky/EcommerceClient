import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';

import Palette from './ColorsPalette';

export default Header = () => (
  <View style={styles.header}>
    <Link to='/'>
      <Text style={styles.title}>TrueShop</Text>
    </Link>
  </View>
);

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