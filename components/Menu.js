import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';

import Palette from './ColorsPalette';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
// import { Icon } from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { componentHolder } from './History';
import NetworkConfig from './NetworkConfig';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    componentHolder.push(this);
    this.state = {
      isAuthenticated: false
    }
  }

  renderUnauthorizedMenu() {
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
  }

  renderAuthorizedMenu() {
    return (
      <View style={styles.menu}>
        <View style={styles.option}>
          <Icon name="account-circle" size={30} color={Palette.brightText} />
          <Text style={styles.optionName}>Profile</Text>
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
  }

  setAuthenticationState() {
    var self = this;
    fetch(NetworkConfig.RestApiAddress + '/user/authenticate')
      .then(function(res) {
        return res.json();
      }).then(function(data) {
        if(data.answer == 'authenticated') {
          console.log('RECEIVED RESPONSE: ', data.answer);
          self.setState({
            isAuthenticated: true
          });
        } else {
          console.log('RECEIVED RESPONSE: ', data.answer);
          self.setState({
            isAuthenticated: false
          });
        };
      }).catch(function(err) {
        console.log("Error in Menu, setAuthenticationState function: " + err);
      });
  }

  componentDidMount() {
    console.log("Menu component did mount");
    this.setAuthenticationState();
  }

  // componentDidUpdate() {
  //   console.log("Menu component did update");
  //   this.setAuthenticationState();
  // }

  render() {
    if(this.state.isAuthenticated === true) {
      return this.renderAuthorizedMenu();
    } else {
      return this.renderUnauthorizedMenu();
    }
  }
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