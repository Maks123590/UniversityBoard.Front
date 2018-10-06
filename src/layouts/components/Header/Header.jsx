import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';

import { Link } from 'dva/router';
import Logo from '../Logo/Logo';
import styles from '../../Layout.less';

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
          <Item key={route.path}>
            <Link to={route.path}>
              {route.name}
            </Link>
          </Item>
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
