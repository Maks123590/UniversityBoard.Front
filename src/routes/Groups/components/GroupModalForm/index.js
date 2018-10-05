import { connect } from 'dva';
import GroupModalForm from './GroupModalForm';

export default connect(({
  dispatch, switches,
}) => ({
  dispatch, visible: switches.groupForm.visible,
}))(GroupModalForm);
