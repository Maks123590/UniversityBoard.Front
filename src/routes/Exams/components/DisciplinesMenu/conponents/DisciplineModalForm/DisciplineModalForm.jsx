import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Modal, Button, Form, Select, InputNumber, DatePicker, message,
} from 'antd';

import { attestationTypes, formModes } from '../../../../../../constants/constants';

import { smaleItemLayout } from './styleConstants';

// import academicDisciplines from '../../../../../../models/academicDisciplines';

class GroupModalForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'academicDepartaments/getAcademicDepartaments', payload: {} });
  }

  handleOk = () => {
    const {
      form, dispatch, attestation, groupId, mode,
    } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        const messageBody = {
          date: values.date,
          academicDisciplineCode: values.disciplineCode,
          groupId,
          hoursCount: values.hoursCount,
          appraisalType: values.appraisalType,
        };
        if (mode === formModes.new) {
          dispatch({ type: 'attestations/createAttestation', payload: { values: { ...messageBody } } });
          message.success('Добавлено');
        } else {
          messageBody.id = attestation.id;
          dispatch({ type: 'attestations/updateAttestation', payload: { values: { ...messageBody } } });
          message.success('Изменено');
        }

        dispatch({ type: 'switches/switchDisciplineForm', payload: { mode: null } });
        form.resetFields();
      }
    });
  }

  handleCancel = () => {
    const { dispatch, form } = this.props;

    form.resetFields();

    dispatch({ type: 'switches/switchDisciplineForm', payload: { mode: null } });
  }

  render() {
    const {
      visible, form, academicDepartaments, dispatch, academicDisciplines, attestation, mode,
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
        title={mode === formModes.new ? 'Новая дисциплина' : 'Редактировать аттестацию'}
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
          <Form.Item label="Кафедра" {...smaleItemLayout}>
            {getFieldDecorator('academicDepartament', {
              rules: [
                {
                  required: true,
                  message: 'введите кафедру',
                },
              ],
              initialValue: mode === formModes.edit ? attestation.academicDiscipline.academicDepartamentCode : null,
            })(
              <Select
                name="disciplineCode"
                placeholder="выберите кафедру"
                onChange={(e) => {
                  dispatch({ type: 'academicDisciplines/getDisciplinesByDepartamentCode', payload: { code: e } });
                }}
              >
                {academicDepartaments.map(academicDepartament => (
                  <Select.Option value={academicDepartament.code} key={academicDepartament.code}>
                    {academicDepartament.name}
                  </Select.Option>
                ))}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Дисциплина" {...smaleItemLayout}>
            {getFieldDecorator('disciplineCode', {
              rules: [
                {
                  required: true,
                  message: 'выберите дисциплину',
                },
              ],
              initialValue: mode === formModes.edit ? attestation.academicDiscipline.disciplineCode : null,
            })(
              <Select
                name="disciplineCode"
                placeholder="выберите предмет"
              >
                {academicDisciplines.map(academicDiscipline => (
                  <Select.Option value={academicDiscipline.disciplineCode} key={academicDiscipline.disciplineCode}>
                    {academicDiscipline.name}
                  </Select.Option>
                ))}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Количество часов" {...smaleItemLayout}>
            {getFieldDecorator('hoursCount', {
              rules: [
                {
                  required: true,
                  message: 'введите количество часов',
                },
              ],
              initialValue: mode === formModes.edit ? attestation.hoursCount : null,
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
              initialValue: mode === formModes.edit ? attestation.appraisalType : null,
            })(
              <Select
                name="appraisalType"
                placeholder="выберите предмет"
              >
                {attestationTypes.map(attestationType => (
                  <Select.Option value={attestationType.key} key={attestationType.key}>
                    {attestationType.value}
                  </Select.Option>
                ))}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="Дата проведения" {...smaleItemLayout}>
            {getFieldDecorator('date', {
              rules: [
                {
                  required: true,
                  message: 'введите дату проведения',
                },
              ],
              initialValue: mode === formModes.edit ? moment(attestation.date) : null,
            })(
              <DatePicker name="issueDate" />,
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
