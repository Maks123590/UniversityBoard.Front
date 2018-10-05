import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Divider } from 'antd';
import GenderDiagramm from './components/GenderDiagramm';
import StudentsList from './components/StudentsList';
// import moment from 'moment';

class GroupInfoPanel extends Component {
    onClose = () => {
      const { dispatch } = this.props;

      dispatch({ type: 'switches/switchGroupInfoPanel' });
    };

    render() {
      const { visible } = this.props;
      return (
        <Drawer
          title="Информация о составе"
          placement="right"
          width={450}
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <GenderDiagramm />
          <Divider>Состав</Divider>
          <StudentsList />
        </Drawer>
      );
    }
}

GroupInfoPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default GroupInfoPanel;
