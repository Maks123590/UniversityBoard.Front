import React from 'react';
// import PropTypes from 'prop-types';
import { Divider } from 'antd';
import LevelDiagramm from './components/LevelDiagramm';
import ResultTable from './components/ResultsTable';
import ExamInfoPanel from './components/ExamInfoPanel';

import styles from './MainPanel.less';

const MainPanel = () => (
  <div className={styles.mainPanel} style={{ width: '100%' }}>
    <div className={styles.panelsWrapper}>
      <ExamInfoPanel />
      <LevelDiagramm />
    </div>
    <Divider />
    <div>
      <ResultTable />
    </div>
  </div>
);

MainPanel.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

MainPanel.defaultProps = {
};

export default MainPanel;
