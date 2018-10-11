import { connect } from 'dva';
import GroupsMenu from './GroupsMenu';

export default connect(({
  groups, switches, dispatch, attestations,
}) => (
  {
    groupMenuActiveKey: switches.groupMenuActiveKey, groups, dispatch, attestations,
  }))(GroupsMenu);
