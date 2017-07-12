import React, { Component } from 'react';
import { TabBar, Tab } from 'native-navigation';

 export default class ScreenThree extends Component {
  componentWillMount() {
    return (
      <TabBar
        elevation={20}
      >
        <Tab
          route={'ScreenOne'}
          title='Home'
        />
        <Tab
          route={'ScreenTwo'}
          title='Chat'
        />
      </TabBar>
    );
  }
}
