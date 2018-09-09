import studentsList from '../stubs/students';
import { getPath } from '../utils/pathManager';

export default {
  namespace: 'students',
  state: {
    list: [],
  },

  reducers: {
    saveStudents(state, { payload: { students } }) {
      return { ...state, list: students };
    },
  },

  effects: {
    *getStudents({ payload }, { call, put }) {  // eslint-disable-line
      console.log(studentsList.length);
      yield put({ type: 'saveStudents', payload: { students: studentsList } });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === getPath('students')) {
          dispatch({ type: 'getStudents', payload: {} });
        }
      });
    },
  },
};
