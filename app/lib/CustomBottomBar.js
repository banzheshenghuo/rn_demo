import React from 'react';
import { View } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

export default class CustomBottomBar extends React.Component {
  render() {
    return <BottomTabBar {...this.props} />;
  }
}
