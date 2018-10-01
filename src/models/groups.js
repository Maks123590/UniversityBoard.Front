// import studentsList from '../stubs/students';

import * as groupsServices from '../services/groups';

import { getPath } from '../utils/pathManager';

export default {
  namespace: 'groups',
  state: {
    list: [],
  },

  reducers: {
    saveGroups(state, { payload: { groups } }) {
      return { ...state, list: groups };
    },
  },

  effects: {
    * getGroups(_, { call, put }) {
      const { data: groupsList } = yield call(groupsServices.getGroups, {});

      yield put({ type: 'saveGroups', payload: { groups: groupsList } });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === getPath('groups') || pathname === getPath('exams')) {
          dispatch({ type: 'getGroups', payload: {} });
        }
      });
    },
  },
};
