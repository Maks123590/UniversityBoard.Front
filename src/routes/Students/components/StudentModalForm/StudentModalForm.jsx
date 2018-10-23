import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Modal, Button, Form, Input, Radio, DatePicker, InputNumber, Select, message,
} from 'antd';

import { smaleItemLayout, largeLabelItemLayout } from './styleConstants';

class StudentModalForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'groups/getGroups' });
  }

  handleOk = () => {
    const {
      form, dispatch, student,
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

    dispatch({ type: 'switches/switchstudentFromVisible' });
    form.resetFields();
  }

  handleCancel = () => {
    const { dispatch, form } = this.props;

    form.resetFields();

    dispatch({ type: 'switches/switchstudentFromVisible' });
  }

  render() {
    const {
      visible, student, groups, form,
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
        title={student.id !== null ? 'Редактировать студента' : 'Новый студент'}
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
          <Form.Item label="Имя" {...smaleItemLayout}>
            {getFieldDecorator('firstName', {
              rules: [
                {
                  required: true,
                  message: 'введите имя',
                },
              ],
              initialValue: student.firstName,
            })(
              <Input name="firstName" />,
            )}
          </Form.Item>
          <Form.Item label="Фамилия" {...smaleItemLayout}>
            {getFieldDecorator('lastName', {
              rules: [
                {
                  required: true,
                  message: 'введите фамилию',
                },
              ],
              initialValue: student.lastName,
            })(
              <Input name="lastName" />,
            )}
          </Form.Item>
          <Form.Item label="Отчество" {...smaleItemLayout}>
            {getFieldDecorator('middleName', {
              rules: [
                {
                  required: true,
                  message: 'введите отчество',
                },
              ],
              initialValue: student.middleName,
            })(
              <Input name="middleName" />,
            )}
          </Form.Item>
          <Form.Item label="Пол" {...smaleItemLayout}>
            {getFieldDecorator('gender', {
              rules: [
                {
                  required: true,
                  message: 'введите пол',
                },
              ],
              initialValue: student.gender,
            })(
              <Radio.Group name="gender">
                <Radio value={1}>Мужской</Radio>
                <Radio value={2}>Женский</Radio>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item label="Дата рождения" {...largeLabelItemLayout}>
            {getFieldDecorator('birthDay', {
              rules: [
                {
                  required: true,
                  message: 'введите дату рождения',
                },
              ],
              initialValue: student.birthDay !== null ? moment(student.birthDay) : null,
            })(
              <DatePicker name="birthDay" />,
            )}
          </Form.Item>
          <Form.Item label="Номер студ. билета" {...largeLabelItemLayout}>
            {getFieldDecorator('studentCardNumber', {
              rules: [
                {
                  required: true,
                  message: 'введите номер студенческого билета',
                },
              ],
              initialValue: student.studentCardNumber,
            })(
              <InputNumber name="studentCardNumber" />,
            )}
          </Form.Item>
          <Form.Item label="Дата выдачи" {...largeLabelItemLayout}>
            {getFieldDecorator('studentCardIssueDate', {
              rules: [
                {
                  required: true,
                  message: 'введите дату выдачи студенческого билета',
                },
              ],
              initialValue: moment(student.studentCardIssueDate),
            })(
              <DatePicker name="issueDate" />,
            )}
          </Form.Item>
          <Form.Item label="Группа" {...smaleItemLayout}>
            {getFieldDecorator('groupId', {
              rules: [
                {
                  required: true,
                  message: 'введите группу',
                },
              ],
              initialValue: student.groupId,
            })(
              <Select
                name="groupId"
                placeholder="dыберите группу"
                onChange={this.handleSelectChange}
              >
                { groups.list !== null ? groups.list.map(group => (
                  <Select.Option value={group.id} key={group.id}>{group.number}</Select.Option>
                )) : ''}
              </Select>,
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

StudentModalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  student: PropTypes.shape({ id: PropTypes.number }).isRequired,
  groups: PropTypes.shape({ list: PropTypes.instanceOf(Array) }),
  form: PropTypes.shape({ getFieldDecorator: PropTypes.func }).isRequired,
};

StudentModalForm.defaultProps = {
  groups: {
    list: [],
  },
};

export default Form.create()(StudentModalForm);
