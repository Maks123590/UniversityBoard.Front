import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu as AntdMenu } from 'antd';

class Menu extends PureComponent {
  render() {
    return (
      <AntdMenu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <AntdMenu.Item key="1">
          {'Option 1'}
        </AntdMenu.Item>
        <AntdMenu.Item key="2">
          {'Option 2'}
        </AntdMenu.Item>
        <AntdMenu.Item key="3">
          {'Option 3'}
        </AntdMenu.Item>
        <AntdMenu.Item key="4">
          {'Option 4'}
        </AntdMenu.Item>
      </AntdMenu>
    );
  }
}

Menu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Menu;
