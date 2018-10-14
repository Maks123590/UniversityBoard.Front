// import studentsList from '../stubs/students';
import * as studentServices from '../services/students';

import { getPath } from '../utils/pathManager';

export default {
  namespace: 'students',
  state: {
    list: null,
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
    addStudent(
      state,
      {
        payload: { student },
      },
    ) {
      state.list.push(student);
      return { ...state };
    },
    changeStudent(
      state,
      {
        payload: { student },
      },
    ) {
      const { list } = state;

      state.list = list.map(el => (el.id === student.id ? student : el)); // eslint-disable-line no-param-reassign

      return { ...state };
    },
    removeStudent(
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
    * getStudents(_, { call, put }) {
      const { data: studentsList } = yield call(studentServices.getStudents, {});

      yield put({ type: 'saveStudents', payload: { students: studentsList } });
    },
    * getStudentsByGroup({ payload: { groupId } }, { call, put }) {
      const { data: students } = yield call(studentServices.getStudentsByGroup, groupId);
      yield put({ type: 'saveStudents', payload: { students } });
    },
    * getStudent({ payload: { studentId } }, { call, put }) {
      const { data: student } = yield call(studentServices.getStudent, studentId);

      yield put({ type: 'saveStudent', payload: { student } });
    },
    * createStudent({ payload: { values } }, { call, put }) {
      const { data: student } = yield call(studentServices.createStudent, values);

      yield put({ type: 'addStudent', payload: { student } });
    },
    * updateStudent({ payload: { values } }, { call, put }) {
      const { data: student } = yield call(studentServices.updateStudent, values);

      yield put({ type: 'changeStudent', payload: { student } });
    },
    * deleteStudent({ payload: { id } }, { call, put }) {
      yield call(studentServices.deleteStudent, id);

      yield put({ type: 'removeStudent', payload: { id } });
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
