import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Table, Button, Avatar, Popconfirm, message,
} from 'antd';

import students from '../../../../../../stubs/students';


const { Column } = Table;

class ResultTable extends PureComponent {
  render() {
    const { dispatch } = this.props;
    return (
      <Fragment>
        <Table
          dataSource={students}
          pagination={{ pageSize: 5 }}
          bordered={false}
          size="small"
          loading={students.length === 0}
          rowKey="id"
        >
          <Column
            title="Фамилия Имя Отчество"
            dataIndex="lastName"
            key="Fio"
            render={(student, record) => (
              <Fragment>
                <Avatar icon="user" shape="square" style={{ marginRight: '4%' }} />
                {`${record.lastName} ${record.firstName} ${record.middleName}`}
              </Fragment>
            )}
            sorter={() => {}}
          />
          <Column
            title="Дата рождения"
            dataIndex="birthDay"
            key="birthDay"
            render={birthDay => moment(birthDay).format('MM.DD.YYYY')}
          />
          <Column
            title="Номер студенческого билета"
            dataIndex="studentCardNumber"
            key="studentCardNumber"
          />
          <Column
            title="Действия"
            dataIndex="id"
            key="actions"
            render={id => (
              <Button.Group>
                <Button
                  type="ghost"
                  icon="edit"
                  onClick={() => {
                    dispatch({ type: 'switches/switchstudentFromVisible', payload: { studentId: id } });
                    dispatch({ type: 'students/getStudent', payload: { studentId: id } });
                  }}
                >
                  {'Редактировать'}
                </Button>
                <Popconfirm
                  title="Вы действительно хотите удалить студента?"
                  onConfirm={() => {
                    dispatch({ type: 'students/deleteStudent', payload: { id } });
                    message.success('Удалено');
                  }}
                >
                  <Button
                    type="ghost"
                    icon="delete"
                  >
                    {'Удалить'}
                  </Button>
                </Popconfirm>
                <Button
                  type="ghost"
                  icon="file-text"
                  onClick={() => {
                    dispatch({ type: 'exams/getExamsByStudentId', payload: { studentId: id } });
                    dispatch({ type: 'switches/switchHistoryPanelVisible' });
                  }}
                >
                  {'История экзаменов'}
                </Button>
              </Button.Group>)}
          />
        </Table>
      </Fragment>
    );
  }
}

ResultTable.propTypes = {
  students: PropTypes.shape({ list: PropTypes.instanceOf(Array) }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ResultTable;
