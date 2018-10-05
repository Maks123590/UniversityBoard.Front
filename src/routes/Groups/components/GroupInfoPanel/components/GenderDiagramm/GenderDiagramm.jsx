import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

// import { Drawer } from 'antd';
// import moment from 'moment';

const data = {
  labels: [
    'Женщины',
    'Мужчины',
  ],
  datasets: [{
    data: [9, 12],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
    ],
  }],
  options: {
    position: 'left',
    fullWidth: true,
  },
};


class GenderDiagramm extends Component {
    onClose = () => {
      const { dispatch } = this.props;

      dispatch({ type: 'switches/switchGroupInfoPanel' });
    };

    render() {
      return (
        <Doughnut
          data={data}
          legend={{
            position: 'right',
            labels: {
              reverse: true,
            },
          }}
        />
      );
    }
}

GenderDiagramm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default GenderDiagramm;
