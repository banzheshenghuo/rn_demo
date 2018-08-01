/**
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native';
import { Button } from 'native-base';

import SignatureCapture, { saveImageFileInExtStorage } from 'react-native-signature-capture';
import _ from 'lodash';

import connect from '../lib/connect';
import { add } from '../action/count';

type Props = {
  navigation: any,
};

type State = {
  signPath: string,
};
class SignScreen extends React.Component<Props, State> {
  state = {
    signPath: '',
  };
  saveSign() {
    this.refs['sign'].saveImage();
  }

  resetSign() {
    this.refs['sign'].resetImage();
  }

  _onSaveEvent = (result) => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    const { add } = this.props;
    console.log(result);
    const path =
      Platform.OS === 'android'
        ? `file://${_.get(result, 'pathName')}`
        : `${_.get(result, 'pathName')}`;

    if (path) {
      this.setState({ signPath: path });
    }
    // add(path);
    global.path = path;
  };
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }
  render() {
    const { signPath } = this.state;
    console.log('signPath====>', signPath);
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
          Signature Capture Extended{' '}
        </Text>
        <SignatureCapture
          style={[styles.signature]}
          ref="sign"
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'landscape'}
        />

        {/* <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.saveSign();
            }}
          >
            <Text>保存</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.resetSign();
            }}
          >
            <Text>重绘</Text>
          </TouchableHighlight>
        </View>
        <View style={{ alignItems: 'center', width: 200, height: 200 }}>
          {signPath ? (
            <Image
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
              source={{ uri: signPath }}
            />
          ) : null}
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signature: {
    width: 300,
    borderColor: '#000033',
    borderWidth: 1,
    height: 300,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});

export default connect(
  SignScreen,
  (store) => ({
    count: store.count.state,
  }),
  () => ({
    add,
  }),
);
