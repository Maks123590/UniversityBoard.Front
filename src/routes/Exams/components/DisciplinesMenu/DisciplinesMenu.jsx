import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Button } from 'antd';
import styles from './DisciplinesMenu.less';
import DisciplineModalForm from './conponents/DisciplineModalForm';

class DisciplinesMenu extends PureComponent {
  render() {
    const { academicDisciplines, dispatch } = this.props;

    return (
      <div className={styles.wrapper}>
        <Tabs
          tabPosition="left"
          className={styles.disciplines}
        >
          {academicDisciplines.list.map(discipline => (
            <Tabs.TabPane
              type="line"
              key={discipline.disciplineCode + discipline.name}
              tab={(
            `${discipline.name}`
            )}
            />
          ))}
        </Tabs>
        <Button
          style={{ width: '100%' }}
          type="ghost"
          onClick={() => {
            dispatch({ type: 'switches/switchDisciplineForm', payload: { mode: null } });
          }}
        >
          {'Новый предмет'}
        </Button>
        <DisciplineModalForm />
      </div>

    );
  }
}

DisciplinesMenu.propTypes = {
  academicDisciplines: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DisciplinesMenu;
