import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import _ from 'lodash';

import connect from '../lib/connect';
import { add } from '../action/count';

class OtherScreen extends React.Component {
  componentDidMount() {}

  render() {
    console.log('this.props===>', this.props);
    const props = this.props;
    return (
      <View style={{ marginTop: 100 }}>
        <Text>other</Text>
        <View style={{ marginTop: 100 }}>
          <Text>输出为</Text>
          <Text>{_.get(props, 'count.size')}</Text>
        </View>
        <Button onPress={props.add}>
          <Text>add</Text>
        </Button>
      </View>
    );
  }
}

export default connect(
  OtherScreen,
  (store) => ({
    count: store.count.state,
  }),
  () => ({
    add,
  }),
);
