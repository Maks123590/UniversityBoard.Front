import { connect } from 'dva';
import ExamInfoModalForm from './ExamInfoModalForm';

export default connect(({
  dispatch, switches, exams, students, attestations,
}) => ({
  dispatch,
  visible: switches.examInfoForm.visible,
  mode: switches.examInfoForm.mode,
  students,
  examInfo: exams.oneExamInfo,
  attestationId: attestations.oneAttestation.id,
  groupId: switches.groupMenuActiveKey,
}))(ExamInfoModalForm);
