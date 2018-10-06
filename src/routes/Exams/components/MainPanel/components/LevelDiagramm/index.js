import { connect } from 'dva';
import LevelDiagramm from './LevelDiagramm';

export default connect(({ dispatch }) => (
  { dispatch }))(LevelDiagramm);
