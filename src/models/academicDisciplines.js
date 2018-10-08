import * as academicDisciplinesServices from '../services/academicDisciplines';

// import { getPath } from '../utils/pathManager';

export default {
  namespace: 'academicDisciplines',
  state: {
    list: [],
    byDepartamentList: [],
  },

  reducers: {
    saveDisciplines(state, { payload: { disciplines } }) {
      return { ...state, list: disciplines };
    },
    saveDisciplinesByDepartaments(state, { payload: { disciplines } }) {
      return { ...state, byDepartamentList: disciplines };
    },
  },

  effects: {
    * getDisciplinesByGroupId({ payload: { groupId } }, { call, put }) {
      const { data: disciplines } = yield call(academicDisciplinesServices.getDisciplines, groupId);

      yield put({ type: 'saveDisciplines', payload: { disciplines } });
    },
    * getDisciplinesByDepartamentCode({ payload: { code } }, { call, put }) {
      const { data: disciplines } = yield call(academicDisciplinesServices.getByAcademicDepartament, code);

      yield put({ type: 'saveDisciplinesByDepartaments', payload: { disciplines } });
    },
  },

  subscriptions: {
  },
};
