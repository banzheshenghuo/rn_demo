const ADD_COUNT = 'type/add_count';

function add(path) {
  return {
    type: ADD_COUNT,
    payload: {
      path,
    },
  };
}

export { ADD_COUNT, add };
