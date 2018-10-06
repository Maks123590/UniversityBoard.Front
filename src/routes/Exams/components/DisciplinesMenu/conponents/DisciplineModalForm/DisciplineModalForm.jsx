import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';

import {
  Modal, Button, Form, Select, InputNumber, // message,
} from 'antd';

import { smaleItemLayout } from './styleConstants';

class GroupModalForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'groups/getGroups', payload: {} });
  }

  handleOk = () => {
    const {
      form, dispatch,
    } = this.props;

    /*
    const {
      form, dispatch,
    } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        const messageBody = {
          ...values,
        };
        if (student.id === null) {
          dispatch({ type: 'students/createStudent', payload: { values: { ...messageBody } } });
          message.success(`Студент ${values.lastName} ${values.firstName} ${values.middleName} добавлен в базу`);
        } else {
          messageBody.id = student.id;
          dispatch({ type: 'students/updateStudent', payload: { values: { ...messageBody } } });
          message.success('Изменено');
        }
      }
    });
    */

    dispatch({ type: 'switches/switchDisciplineForm', payload: { mode: null } });
    form.resetFields();
  }

  handleCancel = () => {
    const { dispatch, form } = this.props;

    form.resetFields();

    dispatch({ type: 'switches/switchDisciplineForm', payload: { mode: null } });
  }

  render() {
    const {
      visible, form,
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
        title="Новая дисциплина"
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
          <Form.Item label="Дисциплина" {...smaleItemLayout}>
            {getFieldDecorator('disciplineCode', {
              rules: [
                {
                  required: true,
                  message: 'введите направление',
                },
              ],
              initialValue: null,
            })(
              <Select
                name="disciplineCode"
                placeholder="выберите предмет"
              >
                <Select.Option value={1} key={1}>
                  {'Направление 1'}
                </Select.Option>
                <Select.Option value={2} key={2}>
                  {'Направление 2'}
                </Select.Option>
                <Select.Option value={3} key={3}>
                  {'Направление 3'}
                </Select.Option>
                <Select.Option value={4} key={4}>
                  {'Направление 4'}
                </Select.Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Количество часов" {...smaleItemLayout}>
            {getFieldDecorator('HoursCount', {
              rules: [
                {
                  required: true,
                  message: 'введите количество часов',
                },
              ],
              initialValue: null,
            })(
              <InputNumber name="HoursCount" />,
            )}
          </Form.Item>
          <Form.Item label="Вид отчета" {...smaleItemLayout}>
            {getFieldDecorator('appraisalType', {
              rules: [
                {
                  required: true,
                  message: 'выберите вид отчетности',
                },
              ],
              initialValue: null,
            })(
              <Select
                name="appraisalType"
                placeholder="выберите предмет"
              >
                <Select.Option value={1} key={1}>
                  {'Направление 1'}
                </Select.Option>
                <Select.Option value={2} key={2}>
                  {'Направление 2'}
                </Select.Option>
                <Select.Option value={3} key={3}>
                  {'Направление 3'}
                </Select.Option>
                <Select.Option value={4} key={4}>
                  {'Направление 4'}
                </Select.Option>
              </Select>,
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

GroupModalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  student: PropTypes.shape({ id: PropTypes.number }).isRequired,
  groups: PropTypes.shape({ list: PropTypes.instanceOf(Array).isRequired }).isRequired,
  form: PropTypes.shape({ getFieldDecorator: PropTypes.func }).isRequired,
};

export default Form.create()(GroupModalForm);
