import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';

class Exams extends PureComponent {
  render() {
    const { students } = this.props;

    return (
      <List
        itemLayout="horizontal"
        dataSource={students}
        renderItem={student => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon="user" shape="square" />}
              title={`${student.lastName} ${student.firstName} ${student.middleName}`}
              description={`Номер студенческого билета: ${student.studentCardNumber}`}
            />
          </List.Item>
        )}
      />
    );
  }
}

Exams.propTypes = {
  students: PropTypes.instanceOf(Object).isRequired,
};

export default Exams;
