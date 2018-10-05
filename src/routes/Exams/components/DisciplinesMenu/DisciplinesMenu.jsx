import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import styles from './DisciplinesMenu.less';

class DisciplinesMenu extends PureComponent {
  render() {
    const { academicDisciplines } = this.props;
    return (
      <Tabs
        tabPosition="left"
        className={styles.groups}
      >
        {academicDisciplines.list.map(discipline => (
          <Tabs.TabPane
            type="line"
            key={discipline.disciplineCode + discipline.name}
            tab={(
            `${discipline.disciplineCode} : ${discipline.name}`
            )}
            className={styles.wrapper}
          />
        ))}
      </Tabs>
    );
  }
}

DisciplinesMenu.propTypes = {
  academicDisciplines: PropTypes.instanceOf(Object).isRequired,
};

export default DisciplinesMenu;
