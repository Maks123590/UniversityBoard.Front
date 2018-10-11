import { connect } from 'dva';
import LevelDiagramm from './LevelDiagramm';

export default connect(({ dispatch, attestations }) => (
  { dispatch, scoreStatistics: attestations.oneAttestation.scoreStatistics }))(LevelDiagramm);
