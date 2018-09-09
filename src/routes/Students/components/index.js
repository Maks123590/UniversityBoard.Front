import { connect } from 'dva';
import StudentList from './StudentsList';

export default connect(({ students, dispatch }) => ({ students, dispatch }))(StudentList);
