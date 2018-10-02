import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/Layout';
import StudentsList from './components/StudentsList/index';
import StudentModalForm from './components/StudentModalForm/index';

class Students extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <StudentsList />
        <StudentModalForm />
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
