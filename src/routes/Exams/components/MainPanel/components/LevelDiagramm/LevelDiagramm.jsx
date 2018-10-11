import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import styles from './LevelDiagramm.less';


function getData(scoreStatistics) {
  return {
    labels: scoreStatistics.map(scoreStat => scoreStat.label),
    datasets: [{
      data: scoreStatistics.map(scoreStat => scoreStat.count),
      backgroundColor: scoreStatistics.map(scoreStat => scoreStat.color),
    }],
    options: {
      position: 'left',
      fullWidth: true,
    },
  };
}

const LevelDiagramm = ({ scoreStatistics }) => (
  <div className={styles.mainPanel}>
    <div className={styles.levelDiagramm}>
      <Pie
        data={getData(scoreStatistics)}
        legend={{
          position: 'right',
          labels: {
            reverse: true,
          },
        }}
      />
    </div>
  </div>
);

LevelDiagramm.propTypes = {
  scoreStatistics: PropTypes.instanceOf(Object).isRequired,
};

LevelDiagramm.defaultProps = {
};

export default LevelDiagramm;
