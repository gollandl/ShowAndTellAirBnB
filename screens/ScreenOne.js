import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Navigator, { TabBar, Tab } from 'native-navigation';
import { ScreenTwo } from './ScreenTwo';
import Screen from '../components/Screen';

export default class ScreenOne extends Component {

  render() {
    return (
        <Screen title='AirBnB Navigation Library'>
          <TouchableOpacity onPress={() => Navigator.push('ScreenTwo')}>
            <Image source={require('../images/airbnblogo.png')} style={styles.bnbImage} />
          </TouchableOpacity>
        </Screen>
    );
  }
}

const styles = StyleSheet.create({
  bnbImage: {
    width: 200,
    height: 200
  }
});
