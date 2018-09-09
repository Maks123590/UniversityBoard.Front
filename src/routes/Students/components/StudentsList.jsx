import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Table, Button, Avatar } from 'antd';

const { Column } = Table;

class StudentsList extends Component {
  state = {};

  render() {
    const { students } = this.props;

    return (
      <Table
        dataSource={students.list}
        pagination={{ pageSize: 8 }}
        bordered={false}
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
        />
        <Column
          title="Дата рождения"
          dataIndex="birthDay"
          key="birthDay"
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
        />
        <Column
          title="Действия"
          dataIndex="actions"
          key="actions"
          render={() => (
            <Button.Group>
              <Button type="ghost" icon="edit">
                {'Редактировать'}
              </Button>
              <Button type="ghost" icon="delete">
                {'Удалить'}
              </Button>
              <Button type="ghost" icon="file-text">
                {'История экзаменов'}
              </Button>
            </Button.Group>)}
        />
      </Table>
    );
  }
}

StudentsList.propTypes = {
  students: PropTypes.shape({ list: PropTypes.instanceOf(Array) }).isRequired,
};

export default StudentsList;
