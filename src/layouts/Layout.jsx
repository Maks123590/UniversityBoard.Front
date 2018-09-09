import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout as AntdLayout,
} from 'antd';

import Header from './components/Header/Header';

import * as styles from './Layout.css';

const { Footer, Content } = AntdLayout;

const Layout = ({ children }) => (
  <AntdLayout className={styles.layout}>
    <Header>
      {'Header'}
    </Header>
    <Content className={styles.Content}>
      {children}
    </Content>
    <Footer className={styles.footer}>
      {'University Board 2018'}
    </Footer>
  </AntdLayout>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

export default Layout;
