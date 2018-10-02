import { connect } from 'dva';
import ExamHistoryPanel from './ExamsHistoryPanel';

export default connect(({ dispatch, switches, exams }) => (
  { dispatch, visible: switches.historyPanelVisible, oneStudentExams: exams.oneStudentExams }))(ExamHistoryPanel);
