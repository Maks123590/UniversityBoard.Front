import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Modal, Button, Form, Input, DatePicker, Select, message,
} from 'antd';

import { smaleItemLayout, largeLabelItemLayout } from './styleConstants';

class GroupModalForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'educationalDirections/getEducationalDirections', payload: {} });
  }

  handleOk = () => {
    const {
      form, dispatch, group,
    } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        const messageBody = {
          ...values,
        };
        if (group.id === null) {
          dispatch({ type: 'groups/createGroup', payload: { values: { ...messageBody } } });
          message.success('Добавлено в базу');
        } else {
          messageBody.id = group.id;
          dispatch({ type: 'groups/updateGroup', payload: { values: { ...messageBody } } });
          message.success('Изменено');
        }

        dispatch({ type: 'switches/switchGroupForm', payload: { mode: null } });
        form.resetFields();
      }
    });
  }

  handleCancel = () => {
    const { dispatch, form } = this.props;

    form.resetFields();

    dispatch({ type: 'switches/switchGroupForm', payload: { mode: null } });
  }

  render() {
    const {
      visible, form, educationalDirections, group,
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
              initialValue: group.number,
            })(
              <Input name="firstName" />,
            )}
          </Form.Item>
          <Form.Item label="Направление" {...smaleItemLayout}>
            {getFieldDecorator('educationalDirectionCode', {
              rules: [
                {
                  required: true,
                  message: 'введите направление',
                },
              ],
              initialValue: group.educationalDirectionCode,
            })(
              <Select
                name="educationalDirection"
                placeholder="выберите направление"
                onChange={this.handleSelectChange}
              >
                {educationalDirections.map(direction => (
                  <Select.Option value={direction.code} key={direction.code}>
                    {direction.name}
                  </Select.Option>
                ))}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Староста" {...smaleItemLayout}>
            {getFieldDecorator('headId', {
              rules: [
                {
                  required: false,
                  message: 'выберите старосту',
                },
              ],
              initialValue: group.headId,
            })(
              <Select
                name="headId"
                placeholder="выберите старосту"
                onChange={this.handleSelectChange}
              >
                {group.students.map(student => (
                  <Select.Option value={student.id} key={student.id}>
                    {`${student.lastName} ${student.firstName} ${student.middleName}`}
                  </Select.Option>
                ))}
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
              initialValue: group.formationDate !== null ? moment(group.formationDate) : null,
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
  form: PropTypes.shape({ getFieldDecorator: PropTypes.func }).isRequired,
  group: PropTypes.shape({ id: PropTypes.number }).isRequired,
};

export default Form.create()(GroupModalForm);
