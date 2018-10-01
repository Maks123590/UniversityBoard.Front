import { connect } from 'dva';
import DisciplinesMenu from './DisciplinesMenu';

export default connect(({ academicDisciplines, dispatch }) => ({ academicDisciplines, dispatch }))(DisciplinesMenu);
