import { connect } from 'dva';
import DisciplineModalForm from './DisciplineModalForm';

export default connect(({
  dispatch, switches,
}) => ({
  dispatch, visible: switches.disciplineForm.visible,
}))(DisciplineModalForm);
