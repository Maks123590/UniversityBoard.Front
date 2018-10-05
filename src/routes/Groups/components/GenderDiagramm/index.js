import { connect } from 'dva';
import GenderDiagramm from './GenderDiagramm';

export default connect(({ dispatch }) => (
  { dispatch }))(GenderDiagramm);
