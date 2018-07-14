import React from 'react';
import { View } from 'react-native';
import _ from 'lodash';

import zx from './zx';

export default function connect(Components, consumer, action) {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = consumer(zx.create._stores);
      this.key = Math.random();
    }

    componentDidMount() {
      zx.onChangeEvent(this.key, this._handleChangeState);
    }

    componentWillUnmount() {
      zx.onRemoveEvent(this.key);
    }

    _handleChangeState = (store) => {
      const state = consumer(store);
      this.setState({ ...state });
    };

    render() {
      const actions = action();
      const dispatcher = {};
      _.forEach(actions, (fn, key) => {
        dispatcher[key] = zx.dispatch(fn());
      });
      return <Components {...this.props} {...this.state} {...dispatcher} />;
    }
  }

  return Wrapper;
}
