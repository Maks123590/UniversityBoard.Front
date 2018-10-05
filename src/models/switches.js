export default {
  namespace: 'switches',
  state: {
    groupMenuActiveKey: '1',
    historyPanelVisible: false,
    studentFrom: false,
    groupInfoPanel: false,
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
    switchGroupInfoPanel(state) {
      return {
        ...state,
        groupInfoPanel: !state.groupInfoPanel,
      };
    },
  },

  effects: {
  },

  subscriptions: {
  },
};
