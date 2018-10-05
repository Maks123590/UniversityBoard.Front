import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Table, Button, Avatar, Popconfirm, message,
} from 'antd';
import GroupInfoPanel from '../GroupInfoPanel';

const { Column } = Table;

class GroupsList extends Component {
  state = {};

  render() {
    const { groups, dispatch } = this.props;

    return (
      <Fragment>
        <Table
          dataSource={groups.list}
          pagination={{ pageSize: 8 }}
          bordered={false}
          loading={groups.list.length === 0}
          footer={() => (
            <Button
              type="secondary"
              icon="usergroup-add"
              style={{ marginLeft: 2 }}
              onClick={() => {
                dispatch({ type: 'switches/switchGroupForm', payload: { mode: null } });
              }}
            >
              {'Новая группа'}
            </Button>
          )}
        >
          <Column
            title="Номер"
            dataIndex="number"
            key="number"
            render={number => (
              <Fragment>
                <Avatar icon="team" style={{ marginRight: 10 }} />
                {`${number}`}
              </Fragment>
            )}
          />
          <Column
            title="Направление"
            key="educationalDirection"
            dataIndex="educationalDirection"
            render={educationalDirection => educationalDirection && educationalDirection.name}
          />
          <Column
            title="Дата создания"
            dataIndex="formationDate"
            key="formationDate"
            render={formationDate => moment(formationDate).format('MM.DD.YYYY')}
          />
          <Column
            title="Староста"
            dataIndex="head"
            key="head"
            render={(head) => {
              if (head) {
                return (
                  <Fragment>
                    <Avatar icon="user" shape="square" style={{ marginRight: '4%' }} />
                    {`${head.lastName} ${head.firstName} ${head.middleName}`}
                  </Fragment>
                );
              }
              return 'Не назначен';
            }}
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
                <Button
                  type="ghost"
                  icon="edit"
                  onClick={() => {
                    dispatch({ type: 'switches/switchGroupForm', payload: { mode: null } });
                  }}
                >
                  {'Редактировать'}
                </Button>
                <Popconfirm
                  title="Вы действительно хотите удалить группу?"
                  onConfirm={() => {
                    // dispatch({ type: 'students/deleteStudent', payload: { id } });
                    message.success('Удалено');
                  }}
                >
                  <Button type="ghost" icon="delete">
                    {'Удалить'}
                  </Button>
                </Popconfirm>

                <Button
                  type="ghost"
                  icon="solution"
                  onClick={() => {
                    dispatch({ type: 'switches/switchGroupInfoPanel' });
                  }}
                >
                  {'Состав'}
                </Button>
              </Button.Group>)}
          />
        </Table>
        <GroupInfoPanel />
      </Fragment>
    );
  }
}

GroupsList.propTypes = {
  groups: PropTypes.shape({ list: PropTypes.instanceOf(Array) }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default GroupsList;
