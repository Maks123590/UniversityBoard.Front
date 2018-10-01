import { connect } from 'dva';
import GroupsMenu from './GroupsMenu';

export default connect(({ groups, switches, dispatch }) => (
  { groupMenuActiveKey: switches.groupMenuActiveKey, groups, dispatch }))(GroupsMenu);
