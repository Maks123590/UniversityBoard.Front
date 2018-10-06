import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Icon } from 'antd';
import DisciplinesMenu from '../DisciplinesMenu';
import styles from './GroupsMenu.less';
import MainPanel from '../MainPanel';


class GroupsMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount() {
    const { dispatch, groupMenuActiveKey } = this.props;
    dispatch({ type: 'switches/setGroupMenuActiveKey', payload: { groupMenuActiveKey } });
    dispatch({ type: 'academicDisciplines/getDisciplinesByGroupId', payload: { groupId: groupMenuActiveKey } });
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
            <MainPanel />
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
