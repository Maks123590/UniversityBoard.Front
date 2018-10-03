// import studentsList from '../stubs/students';
import * as studentServices from '../services/students';

import { getPath } from '../utils/pathManager';

export default {
  namespace: 'students',
  state: {
    list: [],
    oneStudent: {
      id: null,
      firstName: null,
      lastName: null,
      middleName: null,
      gender: null,
      birthDay: null,
      studentCardNumber: null,
      groupId: null,
    },
  },

  reducers: {
    saveStudents(state, { payload: { students } }) {
      return { ...state, list: students };
    },
    saveStudent(state, { payload: { student } }) {
      return { ...state, oneStudent: student };
    },
  },

  effects: {
    * getStudents(_, { call, put }) {
      const { data: studentsList } = yield call(studentServices.getStudents, {});

      yield put({ type: 'saveStudents', payload: { students: studentsList } });
    },
    * getStudent({ payload: { studentId } }, { call, put }) {
      const { data: student } = yield call(studentServices.getStudent, studentId);

      yield put({ type: 'saveStudent', payload: { student } });
    },
    * clearOneStudent(_, { put }) {
      const student = {
        id: null,
        firstName: null,
        lastName: null,
        middleName: null,
        gender: null,
        birthDay: null,
        studentCardNumber: null,
        groupId: null,
      };

      yield put({ type: 'saveStudent', payload: { student } });
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
