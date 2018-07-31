import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = (params) => {
    console.log('para===>', params);
    return { title: 'Home' };
  };

  toList = () => {
    const { navigation } = this.props;
    navigation.navigate('List', { name: 'zq' });
  };

  render() {
    return (
      <View style={{ marginTop: 200, flex: 1 }}>
        <Button onPress={this.toList}>
          <Text>跳转QuickLook</Text>
        </Button>
      </View>
    );
  }
}
