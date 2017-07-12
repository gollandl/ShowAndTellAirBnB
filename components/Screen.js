import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Navigator from 'native-navigation';
import TabBar from './TabBar';

export default class Screen extends Component {
  render() {
    const {
      children,
      title,
    } = this.props;

    return (
      <Navigator.Config title={title}>
        <View style={styles.container}>
          {children}
          <TabBar />
        </View>
      </Navigator.Config>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
