import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NetworkConfig from '../NetworkConfig';
import ColorsPalette from '../ColorsPalette';

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>
          Follow us on
        </Text>
        <View style={styles.socialMediaIconsRow}>
          <Icon name="facebook" size={34} color='#3B5998' onPress={() => Linking.openURL('https://www.facebook.com')} />
          <Icon name="twitter" size={34} color='#00aced' onPress={() => Linking.openURL('https://www.twitter.com')} />
          <Icon name="instagram" size={34} color='#fbad50' onPress={() => Linking.openURL('https://www.instagram.com')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '80%',
    paddingVertical: 40
  },
  mainText: {
    color: ColorsPalette.main,
    fontSize: 20,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    marginBottom: 20
  },
  socialMediaIconsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})