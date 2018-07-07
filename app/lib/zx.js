import _ from 'lodash';

const Dispatcher = {
  _stores: {},
  _subscribes: {},
  register(key, value) {
    this._stores[key] = { ...value, state: value.inital };
  },
  result: this._stores,
  dispatch(action) {
    if (this._stores.length > 0) {
      _.forEach(this._stores, (n) => {
        if (action.type === n.type) {
          this._stores[n.name.state] = n.update(action);
          _.forEach(this._subscribes, (fn) => {
            fn(this._stores);
          });
        }
      });
    }
  },
};

export default {
  create() {
    return Dispatcher;
  },
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
    Dispatcher.dispatch(action);
  },
};
