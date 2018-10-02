export default {
  namespace: 'switches',
  state: {
    groupMenuActiveKey: '1',
    historyPanelVisible: false,
    studentFrom: {
      visible: false,
      studentId: null,
    },
  },

  reducers: {
    setGroupMenuActiveKey(state, { payload: { activeKey } }) {
      return { ...state, groupMenuActiveKey: activeKey };
    },
    switchHistoryPanelVisible(state) {
      return { ...state, historyPanelVisible: !state.historyPanelVisible };
    },
    switchstudentFromVisible(state, { payload: { studentId } }) {
      return {
        ...state,
        studentFrom: {
          visible: !state.studentFrom.visible,
          studentId,
        },
      };
    },
  },

  effects: {
  },

  subscriptions: {
  },
};
