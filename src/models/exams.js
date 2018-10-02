import * as examsServices from '../services/exams';

// import { getPath } from '../utils/pathManager';

export default {
  namespace: 'exams',
  state: {
    oneStudentExams: {
      student: {},
      examInfoList: [],
    },
  },

  reducers: {
    saveOneStudentExams(state, { payload: { oneStudentExams } }) {
      return { ...state, oneStudentExams };
    },
  },

  effects: {
    * getExamsByStudentId({ payload: { studentId } }, { call, put }) {
      const { data: oneStudentExams } = yield call(examsServices.getExamsByStudentId, studentId);

      yield put({ type: 'saveOneStudentExams', payload: { oneStudentExams } });
    },
  },

  subscriptions: {
  },
};
