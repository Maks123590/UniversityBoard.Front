import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Modal, Button, Form, Input, DatePicker, Select, // message,
} from 'antd';

import { smaleItemLayout, largeLabelItemLayout } from './styleConstants';

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

    dispatch({ type: 'switches/switchGroupForm', payload: { mode: null } });
    form.resetFields();
  }

  handleCancel = () => {
    const { dispatch, form } = this.props;

    form.resetFields();

    dispatch({ type: 'switches/switchGroupForm', payload: { mode: null } });
  }

  render() {
    const {
      visible, form,
    } = this.props;
    const { getFieldDecorator } = form;

    const mode = null;

    return (
      <Modal
        visible={visible}
        title={mode !== null ? 'Редактировать группу' : 'Новая группа'}
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
          <Form.Item label="Номер" {...smaleItemLayout}>
            {getFieldDecorator('number', {
              rules: [
                {
                  required: true,
                  message: 'введите номер',
                },
              ],
              initialValue: null,
            })(
              <Input name="firstName" />,
            )}
          </Form.Item>
          <Form.Item label="Направление" {...smaleItemLayout}>
            {getFieldDecorator('groupId', {
              rules: [
                {
                  required: true,
                  message: 'введите направление',
                },
              ],
              initialValue: null,
            })(
              <Select
                name="educationalDirection"
                placeholder="выберите направление"
                onChange={this.handleSelectChange}
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
          <Form.Item label="Староста" {...smaleItemLayout}>
            {getFieldDecorator('headId', {
              rules: [
                {
                  required: true,
                  message: 'выберите старосту',
                },
              ],
              initialValue: null,
            })(
              <Select
                name="headId"
                placeholder="выберите старосту"
                onChange={this.handleSelectChange}
              >
                <Select.Option value={1} key={11}>
                  {'Студент 1'}
                </Select.Option>
                <Select.Option value={2} key={12}>
                  {'Студент 2'}
                </Select.Option>
                <Select.Option value={3} key={13}>
                  {'Студент 3'}
                </Select.Option>
                <Select.Option value={4} key={14}>
                  {'Студент 4'}
                </Select.Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Дата формирования" {...largeLabelItemLayout}>
            {getFieldDecorator('formationDate', {
              rules: [
                {
                  required: true,
                  message: 'введите дату формирования',
                },
              ],
              initialValue: moment(),
            })(
              <DatePicker name="formationDate" />,
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
