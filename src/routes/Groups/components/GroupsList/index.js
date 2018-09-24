import { connect } from 'dva';
import GroupsList from './GroupsList';

export default connect(({ groups, dispatch }) => ({ groups, dispatch }))(GroupsList);
