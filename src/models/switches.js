export default {
  namespace: 'switches',
  state: {
    groupMenuActiveKey: '1',
    historyPanelVisible: false,
    studentFrom: false,
    groupInfoPanel: false,
    groupForm: {
      visible: false,
      mode: null,
    },
    disciplineForm: {
      visible: false,
      mode: null, // 0 - for new, 1 - for edit
    },
    examInfoForm: {
      visible: false,
      mode: null, // 0 - for new, 1 - for edit
    },
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
    switchGroupForm(state, { payload: { mode } }) {
      return {
        ...state,
        groupForm: {
          visible: !state.groupForm.visible,
          mode,
        },
      };
    },
    switchDisciplineForm(state, { payload: { mode } }) {
      return {
        ...state,
        disciplineForm: {
          visible: !state.disciplineForm.visible,
          mode,
        },
      };
    },
    switchExamInfoForm(state, { payload: { mode } }) {
      return {
        ...state,
        examInfoForm: {
          visible: !state.examInfoForm.visible,
          mode,
        },
      };
    },
  },

  effects: {
  },

  subscriptions: {
  },
};
