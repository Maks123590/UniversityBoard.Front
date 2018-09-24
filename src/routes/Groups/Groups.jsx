import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/Layout';
import GroupsList from './components/GroupsList/index';

class Groups extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <GroupsList />
      </Layout>
    );
  }
}

Groups.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Groups;
