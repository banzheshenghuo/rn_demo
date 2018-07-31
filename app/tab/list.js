import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import _ from 'lodash';

export default class ListScreen extends React.Component {
  render() {
    console.log('this.props===>', this.props);
    const name = this.props.navigation.getParam([]);
    console.log(name);
    return (
      <View style={{ marginTop: 100 }}>
        <Text>List</Text>
      </View>
    );
  }
}
