import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import _ from 'lodash';

const path =
  '/Users/unclecharlie/Library/Developer/CoreSimulator/Devices/CDACD7C3-2BD4-442E-8A8D-C428DFBA20CC/data/Containers/Data/Application/8A26C0F5-9903-4E0F-8A7E-2A1E0085D865/Documents/signature.png';

export default class ListScreen extends React.Component {
  render() {
    console.log('this.props===>', this.props);
    const name = this.props.navigation.getParam([]);
    console.log(name);
    return (
      <View style={{ marginTop: 100, alignItems: 'center' }}>
        <Text>List</Text>
        <Image style={{ width: 300, height: 300 }} source={{ url: path }} />
      </View>
    );
  }
}
