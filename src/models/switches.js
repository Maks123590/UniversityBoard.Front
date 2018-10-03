export default {
  namespace: 'switches',
  state: {
    groupMenuActiveKey: '1',
    historyPanelVisible: false,
    studentFrom: false,
  },

  reducers: {
    setGroupMenuActiveKey(state, { payload: { activeKey } }) {
      return { ...state, groupMenuActiveKey: activeKey };
    },
    switchHistoryPanelVisible(state) {
      return { ...state, historyPanelVisible: !state.historyPanelVisible };
    },
    switchstudentFromVisible(state) {
      return {
        ...state,
        studentFrom: !state.studentFrom,
      };
    },
  },

  effects: {
  },

  subscriptions: {
  },
};
