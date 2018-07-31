import _ from 'lodash';
import { ADD_COUNT } from '../action/count';

const count = {
  name: 'count',
  inital: {
    size: 0,
  },
  update(store, action) {
    const { type, payload = {} } = action;
    if (type === ADD_COUNT) {
      return { size: _.get(payload, 'path') };
    }
  },
};

export default count;
