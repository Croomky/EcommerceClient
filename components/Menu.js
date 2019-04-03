import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';

import Palette from './ColorsPalette';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
// import { Icon } from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default Menu = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.option}>
        <Icon name="account-plus" size={30} color={Palette.brightText} />
        <Text style={styles.optionName}>Sign up</Text>
      </View>
      <View style={styles.option}>
        <Icon name="account" size={30} color={Palette.brightText} />
        <Text style={styles.optionName}>Sign in</Text>
      </View>
      <Link to="/categories">
        <View style={styles.option}>
          <Icon name="equal" size={30} color={Palette.brightText} />
          <Text style={styles.optionName}>Categories</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: Palette.main,
    height: 65,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  option: {
    alignItems: 'center'
  },
  optionName: {
    color: Palette.brightText
  }
});