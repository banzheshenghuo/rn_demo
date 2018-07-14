import _ from 'lodash';

const Dispatcher = {
  _stores: {},
  _subscribes: {},
  register(key, value) {
    this._stores[key] = { ...value, state: value.inital };
  },
  dispatch(action) {
    return () => {
      if (!_.isEmpty(this._stores)) {
        _.forEach(this._stores, (n) => {
          const resultData = n.update(this._stores[n.name]['state'], action);
          if (_.isObject(resultData)) {
            this._stores[n.name]['state'] = resultData;
            this.distribute();
          }
        });
      }
    };
  },
  distribute() {
    _.forEach(this._subscribes, (fn) => {
      fn(this._stores);
    });
  },
};

export default {
  create: Dispatcher,
  registy(stores) {
    _.forEach(stores, (value, key) => {
      Dispatcher.register(key, value);
    });
  },
  onChangeEvent(key, fn) {
    Dispatcher._subscribes[key] = fn;
  },
  onRemoveEvent(key) {
    delete Dispatcher._subscribes[key];
  },
  dispatch(action) {
    return Dispatcher.dispatch(action);
  },
};
