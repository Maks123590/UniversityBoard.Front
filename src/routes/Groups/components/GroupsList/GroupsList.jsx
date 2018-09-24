import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Button } from 'antd';

const { Column } = Table;

class GroupsList extends Component {
  state = {};

  render() {
    const { groups } = this.props;

    return (
      <Table
        dataSource={groups.list}
        pagination={{ pageSize: 8 }}
        bordered={false}
      >
        <Column
          title="Номер"
          dataIndex="number"
          key="number"
        />
        <Column
          title="Дата создания"
          dataIndex="formationDate"
          key="formationDate"
        />
        <Column
          title="Староста"
          dataIndex="head"
          key="head"
          render={head => (
            `${head.lastName} ${head.firstName} ${head.middleName}`
          )}
        />
        <Column
          title="Количество студентов"
          dataIndex="studentsCount"
          key="studentsCount"
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
            </Button.Group>)}
        />
      </Table>
    );
  }
}

GroupsList.propTypes = {
  groups: PropTypes.shape({ list: PropTypes.instanceOf(Array) }).isRequired,
};

export default GroupsList;
