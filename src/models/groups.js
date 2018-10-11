// import studentsList from '../stubs/students';

import * as groupsServices from '../services/groups';

import { getPath } from '../utils/pathManager';

export default {
  namespace: 'groups',
  state: {
    list: null,
    oneGroup: {
      students: [],
      head: null,
      studentsCount: null,
      educationalDirection: null,
      id: null,
      number: null,
      headId: null,
      formationDate: null,
      educationalDirectionCode: null,
    },
  },

  reducers: {
    saveGroups(state, { payload: { groups } }) {
      return { ...state, list: groups };
    },
    saveGroup(state, { payload: { data } }) {
      return { ...state, oneGroup: data };
    },
    addGroup(
      state,
      {
        payload: { data },
      },
    ) {
      state.list.push(data);
      return { ...state };
    },
    changeGroup(
      state,
      {
        payload: { data },
      },
    ) {
      const { list } = state;

      state.list = list.map(el => (el.id === data.id ? data : el)); // eslint-disable-line no-param-reassign

      return { ...state };
    },
    removeGroup(
      state,
      {
        payload: { id },
      },
    ) {
      const { list } = state;

      state.list = list.filter(el => el.id !== id); // eslint-disable-line no-param-reassign

      return { ...state };
    },
  },

  effects: {
    * getGroups(_, { call, put }) {
      const { data: groupsList } = yield call(groupsServices.getGroups, {});

      yield put({ type: 'saveGroups', payload: { groups: groupsList } });
    },
    * getGroup({ payload: { id } }, { call, put }) {
      const { data } = yield call(groupsServices.getGroupt, id);

      yield put({ type: 'saveGroup', payload: { data } });
    },
    * createGroup({ payload: { values } }, { call, put }) {
      const { data } = yield call(groupsServices.createGroup, values);

      yield put({ type: 'addGroup', payload: { data } });
    },
    * updateGroup({ payload: { values } }, { call, put }) {
      const { data } = yield call(groupsServices.updateGroup, values);

      yield put({ type: 'changeGroup', payload: { data } });
    },
    * deleteGroup({ payload: { id } }, { call, put }) {
      yield call(groupsServices.deleteGroup, id);

      yield put({ type: 'removeGroup', payload: { id } });
    },
    * clearOneGroup(_, { put }) {
      const data = {
        students: [],
        head: null,
        studentsCount: null,
        educationalDirection: null,
        id: null,
        number: null,
        headId: null,
        formationDate: null,
        educationalDirectionCode: null,
      };

      yield put({ type: 'saveGroup', payload: { data } });
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
