import * as academicDepartamentsServices from '../services/academicDepartaments';

// import { getPath } from '../utils/pathManager';

export default {
  namespace: 'academicDepartaments',
  state: {
    list: [],
  },

  reducers: {
    saveDepartaments(state, { payload: { data } }) {
      return { ...state, list: data };
    },
  },

  effects: {
    * getAcademicDepartaments(_, { call, put }) {
      const { data } = yield call(academicDepartamentsServices.getDepartaments);
      yield put({ type: 'saveDepartaments', payload: { data } });
    },
  },

  subscriptions: {
  },
};
