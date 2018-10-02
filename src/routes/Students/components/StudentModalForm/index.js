import { connect } from 'dva';
import StudentModalForm from './StudentModalForm';

export default connect(({ dispatch, switches }) => (
  { dispatch, visible: switches.studentFrom.visible, studentId: switches.studentFrom.studentId }))(StudentModalForm);
