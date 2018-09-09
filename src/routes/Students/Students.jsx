import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/Layout';
import StudentsList from './components/index';

class Students extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <StudentsList />
      </Layout>
    );
  }
}

Students.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Students;
