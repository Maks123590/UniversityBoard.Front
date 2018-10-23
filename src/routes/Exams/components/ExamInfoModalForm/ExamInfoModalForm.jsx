import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Modal, Button, Form, Select, InputNumber, DatePicker, message,
} from 'antd';

import { formModes } from '../../../../constants/constants';

import { smaleItemLayout } from './styleConstants';


class ExamInfoModalForm extends Component {
  componentDidMount() {
    const { dispatch, groupId } = this.props;
    dispatch({ type: 'students/getStudentsByGroup', payload: { groupId } });
  }

  componentWillReceiveProps(nextProps) {
    const { groupId } = this.props;
    if (groupId !== nextProps.groupId) {
      const { dispatch } = this.props;

      dispatch({ type: 'students/getStudentsByGroup', payload: { groupId: nextProps.groupId } });
    }
  }

  handleOk = () => {
    const {
      form, dispatch, examInfo, attestationId, mode,
    } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        const messageBody = {
          attestationId,
          ...values,
        };
        if (mode === formModes.new) {
          dispatch({ type: 'exams/createExamInfo', payload: { values: { ...messageBody } } });
          message.success('Добавлено');
        } else {
          messageBody.id = examInfo.id;
          dispatch({ type: 'exams/updateExamInfo', payload: { values: { ...messageBody } } });
          message.success('Изменено');
        }

        dispatch({ type: 'switches/switchExamInfoForm', payload: { mode: null } });
        form.resetFields();
      }
    });
  }

  handleCancel = () => {
    const { dispatch, form } = this.props;

    form.resetFields();

    dispatch({ type: 'switches/switchExamInfoForm', payload: { mode: null } });
  }

  render() {
    const {
      visible, form, examInfo, mode, students,
    } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title={mode === formModes.new ? 'Новый отчет по студенту' : 'Редактировать отчет по студенту'}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleOk}>
            {'Подтвердить'}
          </Button>,
          <Button key="back" onClick={this.handleCancel}>
            {'Закрыть'}
          </Button>,
        ]}
      >
        <Form onSubmit={this.onSubmitClick}>
          <Form.Item label="Студент" {...smaleItemLayout}>
            {getFieldDecorator('studentId', {
              rules: [
                {
                  required: true,
                  message: 'выберите студента',
                },
              ],
              initialValue: mode === formModes.edit ? examInfo.student.id : null,
            })(
              <Select
                name="studentId"
                placeholder="выберите студента"
              >
                {students.list !== null ? students.list.map(student => (
                  <Select.Option value={student.id} key={student.id}>
                    {`${student.lastName} ${student.firstName} ${student.middleName}`}
                  </Select.Option>
                )) : ''}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Дата сдачи" {...smaleItemLayout}>
            {getFieldDecorator('date', {
              rules: [
                {
                  required: false,
                  message: 'введите дату сдачи',
                },
              ],
              initialValue: mode === formModes.edit ? moment(examInfo.date) : null,
            })(
              <DatePicker name="date" />,
            )}
          </Form.Item>
          <Form.Item label="Баллы" {...smaleItemLayout}>
            {getFieldDecorator('score', {
              rules: [
                {
                  required: true,
                  message: 'введите количество баллов',
                },
              ],
              initialValue: mode === formModes.edit ? examInfo.score : null,
            })(
              <InputNumber name="score" />,
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

ExamInfoModalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  form: PropTypes.shape({ getFieldDecorator: PropTypes.func }).isRequired,
};

export default Form.create()(ExamInfoModalForm);
