import { connect } from 'dva';
import GroupInfoPanel from './GroupInfoPanel';

export default connect(({ dispatch, switches }) => (
  { dispatch, visible: switches.groupInfoPanel }))(GroupInfoPanel);
