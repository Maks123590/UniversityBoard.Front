import { connect } from 'dva';
import StudentsList from './StudentsList';

export default connect(({ dispatch, groups }) => (
  { dispatch, students: groups.oneGroup.students }))(StudentsList);
