const count = {
  type: 'type/count',
  name: 'count',
  inital: {
    size: 0,
  },
  update(store, action) {
    return { size: this.inital.size + action.size };
  },
};

export { count };
