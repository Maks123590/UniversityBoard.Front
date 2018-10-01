import * as academicDisciplinesServices from '../services/academicDisciplines';

// import { getPath } from '../utils/pathManager';

export default {
  namespace: 'academicDisciplines',
  state: {
    list: [],
  },

  reducers: {
    saveDisciplines(state, { payload: { disciplines } }) {
      return { ...state, list: disciplines };
    },
  },

  effects: {
    * getDisciplinesByGroupId({ payload: { groupId } }, { call, put }) {
      const { data: disciplines } = yield call(academicDisciplinesServices.getDisciplines, groupId);

      yield put({ type: 'saveDisciplines', payload: { disciplines } });
    },
  },

  subscriptions: {
  },
};
