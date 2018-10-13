// import studentsList from '../stubs/students';

import * as attestationsServices from '../services/attestations';

export default {
  namespace: 'attestations',
  state: {
    list: null,
    oneAttestation: {
      academicDiscipline: null,
      examInfos: [],
      group: null,
      scoreStatistics: [],
      id: null,
      date: null,
      academicDisciplineCode: null,
      groupId: null,
      hoursCount: null,
      appraisalType: null,
    },
  },

  reducers: {
    saveAttestations(state, { payload: { data } }) {
      return { ...state, list: data };
    },
    saveAttestation(state, { payload: { data } }) {
      return { ...state, oneAttestation: data };
    },
    addAttestation(
      state,
      {
        payload: { data },
      },
    ) {
      state.list.push(data);
      return { ...state };
    },
    changeAttestation(
      state,
      {
        payload: { data },
      },
    ) {
      const { list } = state;

      state.list = list.map(el => (el.id === data.id ? data : el)); // eslint-disable-line no-param-reassign

      state.oneAttestation = { // eslint-disable-line no-param-reassign
        ...data,
      };

      return { ...state };
    },
    removeAttestation(
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
    * getAttestationsByGroupId({ payload: { groupId } }, { call, put }) {
      const { data } = yield call(attestationsServices.getAttestations, groupId);

      yield put({ type: 'saveAttestations', payload: { data } });

      if (data.length > 0) {
        const { data: attestation } = yield call(attestationsServices.getAttestation, data[0].id);
        yield put({ type: 'saveAttestation', payload: { data: attestation } });
      } else {
        const att = {
          academicDiscipline: null,
          examInfos: [],
          group: null,
          scoreStatistics: [],
          id: null,
          date: null,
          academicDisciplineCode: null,
          groupId: null,
          hoursCount: null,
          appraisalType: null,
        };
        yield put({ type: 'saveAttestation', payload: { data: att } });
      }
    },
    * getAttestation({ payload: { id } }, { call, put }) {
      const { data } = yield call(attestationsServices.getAttestation, id);

      yield put({ type: 'saveAttestation', payload: { data } });
    },
    * createAttestation({ payload: { values } }, { call, put }) {
      const { data } = yield call(attestationsServices.createAttestation, values);

      yield put({ type: 'addAttestation', payload: { data } });
    },
    * updateAttestation({ payload: { values } }, { call, put }) {
      const { data } = yield call(attestationsServices.updateAttestation, values);

      yield put({ type: 'changeAttestation', payload: { data } });
    },
    * deleteAttestation({ payload: { id } }, { call, put }) {
      yield call(attestationsServices.deleteAttestation, id);

      yield put({ type: 'removeAttestation', payload: { id } });

      const { data } = yield call(attestationsServices.getAttestation, 1); // 1 - remove in feature

      yield put({ type: 'saveAttestation', payload: { data } });
    },
    * clearOneAttestations(_, { put }) {
      const data = {
        academicDiscipline: null,
        examInfos: [],
        group: null,
        scoreStatistics: [],
        id: null,
        date: null,
        academicDisciplineCode: null,
        groupId: null,
        hoursCount: null,
        appraisalType: null,
      };

      yield put({ type: 'saveAttestation', payload: { data } });
    },
  },

  subscriptions: {
  },
};
