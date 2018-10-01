export default {
  namespace: 'switches',
  state: {
    groupMenuActiveKey: '1',
  },

  reducers: {
    setGroupMenuActiveKey(state, { payload: { activeKey } }) {
      return { ...state, groupMenuActiveKey: activeKey };
    },
  },

  effects: {
  },

  subscriptions: {
  },
};
