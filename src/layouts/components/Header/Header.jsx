import React from 'react';
import { Layout, Menu } from 'antd';

import Logo from '../Logo/Logo';
import styles from '../../Layout.css';

import routes from '../../../constants/routes';

const { Item } = Menu;
const { Header: HeaderAntd } = Layout;

const Header = () => (
  <HeaderAntd className={styles.header}>
    <Menu
      theme="dark"
      mode="horizontal"
      className={styles.menu}
    >
      <Item key="0"><Logo /></Item>
      {routes.filter(route => route.isRoout === true).map(route => (
        <Item key={route.value}>{route.name}</Item>
      ))}
    </Menu>
  </HeaderAntd>
);

export default Header;
