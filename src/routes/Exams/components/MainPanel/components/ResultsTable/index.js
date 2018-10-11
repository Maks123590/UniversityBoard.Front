import { connect } from 'dva';
import ResultsTable from './ResultsTable';

export default connect(({ students, dispatch, attestations }) => (
  { students, dispatch, examInfos: attestations.oneAttestation.examInfos }))(ResultsTable);
