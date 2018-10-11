import { connect } from 'dva';
import DisciplinesMenu from './DisciplinesMenu';

export default connect(({ academicDisciplines, attestations, dispatch }) => (
  { academicDisciplines, dispatch, attestations }))(DisciplinesMenu);
