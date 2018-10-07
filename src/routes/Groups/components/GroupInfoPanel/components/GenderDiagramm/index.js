import { connect } from 'dva';
import GenderDiagramm from './GenderDiagramm';

export default connect(({ dispatch, groups }) => (
  { dispatch, students: groups.oneGroup.students }))(GenderDiagramm);
