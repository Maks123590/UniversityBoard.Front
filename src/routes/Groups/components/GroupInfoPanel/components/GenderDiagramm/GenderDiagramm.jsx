import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

// import { Drawer } from 'antd';
// import moment from 'moment';

function getData(students) {
  return {
    labels: [
      'Мужчины',
      'Женщины',
    ],
    datasets: [{
      data: [
        students.filter(el => el.gender === 1).length,
        students.filter(el => el.gender === 2).length,
      ],
      backgroundColor: [
        '#36A2EB',
        '#FF6384',
      ],
      hoverBackgroundColor: [
        '#36A2EB',
        '#FF6384',
      ],
    }],
    options: {
      position: 'left',
      fullWidth: true,
    },
  };
}

class GenderDiagramm extends Component {
    onClose = () => {
      const { dispatch } = this.props;

      dispatch({ type: 'switches/switchGroupInfoPanel' });
    };

    render() {
      const { students } = this.props;

      return (
        <Doughnut
          data={getData(students)}
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
  students: PropTypes.instanceOf(Array).isRequired,
};

export default GenderDiagramm;
