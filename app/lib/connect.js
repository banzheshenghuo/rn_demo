import React from 'react';
import { View } from 'react-native';

import zx from './zx';

export default function connect(Components, consumer) {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      console.log('zx.create.result===>', zx.create.result);
      this.state = consumer(zx.create.result).state;
      this.key = Math.random();
    }

    componentDidMount() {
      zx.onChangeEvent(this.key, this._handleChangeState);
    }

    componentWillUnmount() {
      zx.onRemoveEvent(this.key);
    }

    _handleChangeState = (store) => {
      const state = consumer(store)['state'];
      this.setState({ ...state });
    };

    render() {
      return <Components {...this.props} {...this.state} />;
    }
  }

  return Wrapper;
}
