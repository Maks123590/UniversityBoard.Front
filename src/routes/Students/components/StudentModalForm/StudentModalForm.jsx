import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

class StudentModalForm extends Component {
  handleOk = () => {
  }

  handleCancel = () => {
    const { dispatch, studentId } = this.props;

    dispatch({ type: 'switches/switchstudentFromVisible', payload: { studentId } });
  }

  render() {
    const { visible, studentId } = this.props;
    return (
      <Modal
        visible={visible}
        title={studentId !== null ? 'Редактировать студента' : 'Новый студент'}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>Return</Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>
            {'Submit'}
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

StudentModalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  studentId: PropTypes.number.isRequired,
};

export default StudentModalForm;
