import * as educationalDirectionsServices from '../services/educationalDirections';

// import { getPath } from '../utils/pathManager';

export default {
  namespace: 'educationalDirections',
  state: {
    list: [],
  },

  reducers: {
    saveDirections(state, { payload: { data } }) {
      return { ...state, list: data };
    },
  },

  effects: {
    * getEducationalDirections(_, { call, put }) {
      const { data } = yield call(educationalDirectionsServices.getEducationalDirections);

      yield put({ type: 'saveDirections', payload: { data } });
    },
  },

  subscriptions: {
  },
};
