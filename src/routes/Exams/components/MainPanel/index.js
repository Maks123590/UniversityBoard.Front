import { connect } from 'dva';
import MainPanel from './MainPanel';

export default connect(({ switches, dispatch }) => (
  { groupMenuActiveKey: switches.groupMenuActiveKey, dispatch }))(MainPanel);
