import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Table, Button, Avatar, Popconfirm, message,
} from 'antd';
import ExamHistoryPanel from '../ExamsHistoryPanel';

const { Column } = Table;

const sortStrings = (a, b) => {
  const str1 = `${a.lastName} ${a.firstName} ${a.middleName}`;
  const str2 = `${b.lastName} ${b.firstName} ${b.middleName}`;

  if (str1 < str2) {
    return -1;
  }

  if (str1 > str2) {
    return 1;
  }

  return 0;
};

class StudentsList extends PureComponent {
  render() {
    const { students, dispatch } = this.props;
    return (
      <Fragment>
        <Table
          dataSource={students.list}
          pagination={{ pageSize: 8 }}
          bordered={false}
          loading={students.list.length === 0}
          rowKey="id"
          footer={() => (
            <Button
              type="secondary"
              icon="user-add"
              style={{ marginLeft: 2 }}
              onClick={() => {
                dispatch({ type: 'switches/switchstudentFromVisible', payload: { studentId: null } });
                dispatch({ type: 'students/clearOneStudent' });
              }}
            >
              {'Новый студент'}
            </Button>
          )}
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
            sorter={sortStrings}
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
            title="Группа"
            dataIndex="group"
            key="group"
            render={group => group.number}
            sorter={(a, b) => Number(a.group.number) - Number(b.group.number)}
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
        <ExamHistoryPanel />
      </Fragment>
    );
  }
}

StudentsList.propTypes = {
  students: PropTypes.shape({ list: PropTypes.instanceOf(Array) }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default StudentsList;
