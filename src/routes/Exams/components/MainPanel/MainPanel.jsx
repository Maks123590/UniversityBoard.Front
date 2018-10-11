import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Divider } from 'antd';
import LevelDiagramm from './components/LevelDiagramm';
import ResultTable from './components/ResultsTable';


class MainPanel extends PureComponent {
  constructor(props) {
    super(props);
    console.log('test');
    // this.selectTab = this.selectTab.bind(this);
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <div>
          <LevelDiagramm />
        </div>
        <Divider />
        <div>
          <ResultTable />
        </div>
      </div>
    );
  }
}

MainPanel.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

MainPanel.defaultProps = {
};

export default MainPanel;
