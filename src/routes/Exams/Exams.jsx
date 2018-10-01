import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/Layout';
import GroupsMenu from './components/GroupsMenu';


class Exams extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <GroupsMenu />
      </Layout>
    );
  }
}

Exams.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Exams;
