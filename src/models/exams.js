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
        id: 2,
        firstName: 'Марат',
        lastName: 'Асекаев',
        middleName: 'Русланович',
        gender: 1,
        birthDay: '1997-01-13T00:00:00',
        studentCardNumber: 151609,
        studentCardIssueDate: '0001-01-30T00:00:00',
        groupId: 1,
      },
      academicDiscipline: null,
      appraisalType: 0,
      id: 2,
      attestationId: 1,
      date: '2017-09-30T00:00:00',
      studentId: 2,
      score: 55,
      level: 0,
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
