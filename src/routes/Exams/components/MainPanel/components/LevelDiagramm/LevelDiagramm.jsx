import React from 'react';
// import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import styles from './LevelDiagramm.less';

const data = {
  labels: [
    'Не зачтено',
    'Удовлетворительно',
    'Хорошо',
    'Отлично',
  ],
  datasets: [{
    data: [2, 9, 12, 7],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
  }],
  options: {
    position: 'left',
    fullWidth: true,
  },
};

const LevelDiagramm = () => (
  <div className={styles.mainPanel}>
    <div className={styles.levelDiagramm}>
      <Pie
        data={data}
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
};

LevelDiagramm.defaultProps = {
};

export default LevelDiagramm;
