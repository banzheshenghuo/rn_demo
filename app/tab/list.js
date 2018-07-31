import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Button } from 'native-base';
import _ from 'lodash';

const ios =
  '/Users/unclecharlie/Library/Developer/CoreSimulator/Devices/CDACD7C3-2BD4-442E-8A8D-C428DFBA20CC/data/Containers/Data/Application/8A26C0F5-9903-4E0F-8A7E-2A1E0085D865/Documents/signature.png';
const android = 'file:///storage/emulated/0/saved_signature/signature.png';

const path = Platform.OS === 'android' ? android : ios;
export default class ListScreen extends React.Component {
  render() {
    console.log('this.props===>', this.props);
    const name = this.props.navigation.getParam([]);
    console.log(name);
    return (
      <View style={{ marginTop: 100, alignItems: 'center' }}>
        <Text>List</Text>
        <Image style={{ width: 300, height: 300 }} source={{ uri: path }} />
      </View>
    );
  }
}
