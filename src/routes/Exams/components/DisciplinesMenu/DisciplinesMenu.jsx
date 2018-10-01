import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import styles from './DisciplinesMenu.less';

class DisciplinesMenu extends PureComponent {
  render() {
    const { academicDisciplines } = this.props;
    return (
      <Menu
        onClick={this.handleClick}
        className={styles.groups}
        mode="inline"
      >
        {academicDisciplines.list.map(discipline => (
          <Menu.Item key={discipline.disciplineCode + discipline.name}>
            {`${discipline.disciplineCode} : ${discipline.name}`}
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

DisciplinesMenu.propTypes = {
  academicDisciplines: PropTypes.instanceOf(Object).isRequired,
};

export default DisciplinesMenu;
