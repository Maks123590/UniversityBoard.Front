import { connect } from 'dva';
import StudentsList from './StudentsList';

export default connect(({ dispatch }) => (
  { dispatch }))(StudentsList);
