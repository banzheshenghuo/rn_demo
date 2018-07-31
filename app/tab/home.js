/**
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'native-base';

type Props = {
  navigation: any,
};

export default class HomeScreen extends React.Component<Props, {}> {
  static navigationOptions = (params) => {
    console.log('para===>', params);
    return { title: 'Home' };
  };

  toList = () => {
    const { navigation } = this.props;
    navigation.navigate('List', { name: 'zq' });
  };

  toSign = () => {
    const { navigation } = this.props;
    navigation.navigate('Sign');
  };

  render() {
    return (
      <View style={{ marginTop: 200, flex: 1 }}>
        <Button onPress={this.toList}>
          <Text>跳转QuickLook</Text>
        </Button>
        <Button onPress={this.toSign}>
          <Text>跳转签名页面</Text>
        </Button>
      </View>
    );
  }
}
