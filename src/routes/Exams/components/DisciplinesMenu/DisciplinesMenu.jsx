import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Button } from 'antd';
import styles from './DisciplinesMenu.less';

class DisciplinesMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(activeKey) {
    const { dispatch } = this.props;

    dispatch({ type: 'attestations/getAttestation', payload: { id: activeKey } });
  }

  render() {
    const { attestations, dispatch } = this.props;

    return (
      <div className={styles.wrapper}>
        <Tabs
          tabPosition="left"
          className={styles.disciplines}
          onChange={this.selectTab}
        >
          {attestations.list !== null ? attestations.list.map(attestation => (
            <Tabs.TabPane
              type="line"
              key={attestation.id}
              tab={(
            `${attestation.academicDiscipline.name}`
            )}
            />
          )) : ''}
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
      </div>

    );
  }
}

DisciplinesMenu.propTypes = {
  attestations: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DisciplinesMenu;
