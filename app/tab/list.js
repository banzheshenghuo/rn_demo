import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Button } from 'native-base';
import _ from 'lodash';

import connect from '../lib/connect';
import { add } from '../action/count';

// const ios =
//   '/Users/unclecharlie/Library/Developer/CoreSimulator/Devices/CDACD7C3-2BD4-442E-8A8D-C428DFBA20CC/data/Containers/Data/Application/8A26C0F5-9903-4E0F-8A7E-2A1E0085D865/Documents/signature.png';
const android = 'file:///storage/emulated/0/saved_signature/signature.png';

const ios =
  '/var/mobile/Containers/Data/Application/88FD8A7D-3C63-4069-B47A-6A2D7C48B5A5/Documents/signature.png';

class ListScreen extends React.Component {
  _update = (path) => {
    return Platform.OS === 'android' ? `file://${path}` : path;
  };

  render() {
    // const props = this.props;
    // const path = _.get(props, 'count.size');
    // console.log('props====>', this.props);
    // let iamgePath = '';
    // if (path) {
    //   iamgePath = this.update(path);
    // }
    const path = Platform.OS === 'android' ? `file://${global.path}` : `${global.path}`;
    return (
      <View style={{ marginTop: 100, alignItems: 'center' }}>
        <Text>List</Text>
        <Image style={{ width: 300, height: 300 }} source={{ uri: path }} />
      </View>
    );
  }
}

export default connect(
  ListScreen,
  (store) => ({
    count: store.count.state,
  }),
  () => ({
    add,
  }),
);
