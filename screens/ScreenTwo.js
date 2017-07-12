import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';
import Screen from '../components/Screen';

export default class ScreenTwo extends Component {
  render() {
    return (
      <Screen title='Native Navigation'>
          <Image source={require('../images/github.png')} style={styles.image}/>
          <Text>github.com/airbnb/native-navigation</Text>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
});
