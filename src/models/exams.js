import * as examsServices from '../services/exams';

// import { getPath } from '../utils/pathManager';

export default {
  namespace: 'exams',
  state: {
    oneStudentExams: {
      student: {},
      examInfoList: [],
    },
    oneExamInfo: {
      student: {
      },
      academicDiscipline: null,
      appraisalType: null,
      id: null,
      attestationId: null,
      date: null,
      studentId: null,
      score: null,
      level: null,
    },
  },

  reducers: {
    saveOneStudentExams(state, { payload: { oneStudentExams } }) {
      return { ...state, oneStudentExams };
    },
    saveOneExamInfo(state, { payload: { data } }) {
      return { ...state, oneExamInfo: data };
    },
  },

  effects: {
    * getExamsByStudentId({ payload: { studentId } }, { call, put }) {
      const { data: oneStudentExams } = yield call(examsServices.getExamsByStudentId, studentId);

      yield put({ type: 'saveOneStudentExams', payload: { oneStudentExams } });
    },
    * getExamInfo({ payload: { id } }, { call, put }) {
      const { data } = yield call(examsServices.getExamInfo, id);

      yield put({ type: 'saveOneExamInfo', payload: { data } });
    },
    * createExamInfo({ payload: { values } }, { call, put }) {
      const { data } = yield call(examsServices.createExamInfo, values);

      yield put({ type: 'attestations/getAttestation', payload: { id: data.attestationId } });
    },
    * updateExamInfo({ payload: { values } }, { call, put }) {
      const { data } = yield call(examsServices.updateExamInfo, values);

      yield put({ type: 'attestations/getAttestation', payload: { id: data.attestationId } });
    },
    * deleteExamInfo({ payload: { id } }, { call, put }) {
      const { data } = yield call(examsServices.getExamInfo, id);
      yield call(examsServices.deleteExamInfo, id);

      yield put({ type: 'attestations/getAttestation', payload: { id: data.attestationId } });
    },
  },

  subscriptions: {
  },
};
