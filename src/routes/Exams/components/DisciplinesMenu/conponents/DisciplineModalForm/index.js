import { connect } from 'dva';
import DisciplineModalForm from './DisciplineModalForm';

export default connect(({
  dispatch, switches, academicDepartaments, academicDisciplines, attestations,
}) => ({
  dispatch,
  visible: switches.disciplineForm.visible,
  mode: switches.disciplineForm.mode,
  academicDepartaments: academicDepartaments.list,
  academicDisciplines: academicDisciplines.byDepartamentList,
  attestation: attestations.oneAttestation,
  groupId: switches.groupMenuActiveKey,
}))(DisciplineModalForm);
