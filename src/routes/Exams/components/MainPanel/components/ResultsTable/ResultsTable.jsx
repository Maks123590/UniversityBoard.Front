import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Table, Button, Avatar, Popconfirm, message,
} from 'antd';

// import students from '../../../../../../stubs/students';


const { Column } = Table;

class ResultTable extends PureComponent {
  render() {
    const { dispatch, examInfos } = this.props;
    return (
      <Fragment>
        <Table
          dataSource={examInfos}
          pagination={{ pageSize: 5 }}
          bordered={false}
          size="small"
          loading={examInfos === null}
          rowKey="id"
          footer={() => (
            <Button
              type="secondary"
              icon="user-add"
              style={{ marginLeft: 2 }}
              onClick={() => {
                // dispatch({ type: 'switches/switchstudentFromVisible', payload: { studentId: null } });
                // dispatch({ type: 'students/clearOneStudent' });
              }}
            >
              {'Новый студент'}
            </Button>
          )}
        >
          <Column
            title="Фамилия Имя Отчество"
            dataIndex="student"
            key="Fio"
            render={(student, record) => (
              <Fragment>
                <Avatar icon="user" shape="square" style={{ marginRight: '4%' }} />
                {`${record.student.lastName} ${record.student.firstName} ${record.student.middleName}`}
              </Fragment>
            )}
            sorter={() => {}}
          />
          <Column
            title="Дата сдачи"
            dataIndex="date"
            key="date"
            render={date => moment(date).format('MM.DD.YYYY')}
          />
          <Column
            title="Баллы"
            dataIndex="score"
            key="score"
          />
          <Column
            title="Оценка"
            dataIndex="level"
            key="level"
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
              </Button.Group>)}
          />
        </Table>
      </Fragment>
    );
  }
}

ResultTable.propTypes = {
  examInfos: PropTypes.instanceOf(Array).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ResultTable;
