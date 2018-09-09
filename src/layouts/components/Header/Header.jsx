import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';

import Logo from '../Logo/Logo';
import styles from '../../Layout.css';

import routes from '../../../constants/routes';

const { Item } = Menu;
const { Header: HeaderAntd } = Layout;

const Header = ({ location }) => {
  const selectedKey = routes.filter(route => location.pathname === route.path).map(route => route.path);
  return (
    <HeaderAntd className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        selectedKeys={selectedKey}
      >
        <Item key="0"><Logo /></Item>
        {routes.filter(route => route.isRoout === true).map(route => (
          <Item key={route.path}>{route.name}</Item>
        ))}
      </Menu>
    </HeaderAntd>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Header;
