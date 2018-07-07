import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'native-base';
import connect from '../lib/connect';

class OtherScreen extends React.Component {
  render() {
    console.log('this.props===>', this.props);
    return (
      <View style={{ marginTop: 100 }}>
        <Text>other</Text>
      </View>
    );
  }
}

export default connect(
  OtherScreen,
  (store) => ({
    count: store.count,
  }),
);
