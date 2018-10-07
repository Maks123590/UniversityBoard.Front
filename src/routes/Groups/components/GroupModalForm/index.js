import { connect } from 'dva';
import GroupModalForm from './GroupModalForm';

export default connect(({
  dispatch, switches, educationalDirections, groups,
}) => ({
  dispatch,
  visible: switches.groupForm.visible,
  educationalDirections: educationalDirections.list,
  group: groups.oneGroup,
}))(GroupModalForm);
