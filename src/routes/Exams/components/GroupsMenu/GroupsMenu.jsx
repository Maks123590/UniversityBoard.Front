import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Icon } from 'antd';
import { Pie } from 'react-chartjs-2';
import DisciplinesMenu from '../DisciplinesMenu';
import styles from './GroupsMenu.less';

const data = {
  labels: [
    'Не зачтено',
    'Удовлетворительно',
    'Хорошо',
    'Отлично',
  ],
  datasets: [{
    data: [2, 9, 12, 7],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
  }],
  options: {
    position: 'left',
    fullWidth: true,
  },
};

class GroupsMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(activeKey) {
    const { dispatch } = this.props;
    dispatch({ type: 'switches/setGroupMenuActiveKey', payload: { activeKey } });
    dispatch({ type: 'academicDisciplines/getDisciplinesByGroupId', payload: { groupId: activeKey } });
  }

  render() {
    const { groups, groupMenuActiveKey } = this.props;
    return (
      <Tabs defaultActiveKey={groupMenuActiveKey} size="large" onChange={this.selectTab}>
        {groups.list.map(group => (
          <Tabs.TabPane
            tab={(
              <div>
                <Icon type="team" theme="outlined" />
                {group.number}
              </div>
            )}
            key={group.id}
            className={styles.wrapper}
          >
            <DisciplinesMenu />
            <div className={styles.levelDiagramm}>
              <Pie
                data={data}
                legend={{
                  position: 'right',
                  labels: {
                    reverse: true,
                  },
                }}
              />
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    );
  }
}

GroupsMenu.propTypes = {
  groups: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
  groupMenuActiveKey: PropTypes.string,
};

GroupsMenu.defaultProps = {
  groupMenuActiveKey: '1',
};

export default GroupsMenu;
