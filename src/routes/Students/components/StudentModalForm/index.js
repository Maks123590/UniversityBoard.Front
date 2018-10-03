import { connect } from 'dva';
import StudentModalForm from './StudentModalForm';

export default connect(({
  dispatch, switches, students, groups,
}) => ({
  dispatch, visible: switches.studentFrom, student: students.oneStudent, groups,
}))(StudentModalForm);
