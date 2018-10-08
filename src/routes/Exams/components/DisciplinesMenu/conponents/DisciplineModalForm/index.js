import { connect } from 'dva';
import DisciplineModalForm from './DisciplineModalForm';

export default connect(({
  dispatch, switches, academicDepartaments, academicDisciplines,
}) => ({
  dispatch,
  visible: switches.disciplineForm.visible,
  academicDepartaments: academicDepartaments.list,
  academicDisciplines: academicDisciplines.byDepartamentList,
}))(DisciplineModalForm);
