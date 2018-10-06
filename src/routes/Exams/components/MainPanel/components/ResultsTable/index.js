import { connect } from 'dva';
import ResultsTable from './ResultsTable';

export default connect(({ students, dispatch }) => ({ students, dispatch }))(ResultsTable);
