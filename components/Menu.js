import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';

import Palette from './ColorsPalette';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
// import { Icon } from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NetworkConfig from './NetworkConfig';
import SessionIdHandler from './SessionIdHandler';
import { setMenuComponent } from './MenuRefresher';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);

    setMenuComponent(this);

    this.state = {
      isAuthenticated: false
    }
  }

  renderUnauthorizedMenu() {
    return (
      <View style={styles.menu}>
        <Link to="/signUp">
          <View style={styles.option}>
            <Icon name="account-plus" size={30} color={Palette.brightText} />
            <Text style={styles.optionName}>Sign up</Text>
          </View>
        </Link>
        <Link to="/signIn">
          <View style={styles.option}>
            <Icon name="account" size={30} color={Palette.brightText} />
            <Text style={styles.optionName}>Sign in</Text>
          </View>
        </Link>
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
        <Link to="/profile">
          <View style={styles.option}>
            <Icon name="account-circle" size={30} color={Palette.brightText} />
            <Text style={styles.optionName}>Profile</Text>
          </View>
        </Link>
        {/* <View style={styles.option}>
          <Icon name="account" size={30} color={Palette.brightText} />
          <Text style={styles.optionName}>Sign in</Text>
        </View> */}
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
    fetch(NetworkConfig.RestApiAddress + '/user/authenticate', {
      headers: {
        'Cookie': 'sessionid=' + SessionIdHandler.sessionId
      }
    }).then(function(res) {
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

    // if(SessionIdHandler.sessionId != '') {
    //   this.setState({
    //     isAuthenticated: true
    //   })
    // }
  }

  componentDidMount() {
    console.log("Menu component did mount");
    this.setAuthenticationState();
  }

  // componentDidUpdate() {
  //   console.log("Menu component did update");
  //   this.setAuthenticationState();
  // }

  refresh() {
    console.log('Menu refreshed');
  }

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