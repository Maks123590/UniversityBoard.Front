import { connect } from 'dva';
import ExamInfoPanel from './ExamInfoPanel';

export default connect(({ dispatch, attestations }) => (
  { dispatch, attestation: attestations.oneAttestation }))(ExamInfoPanel);
