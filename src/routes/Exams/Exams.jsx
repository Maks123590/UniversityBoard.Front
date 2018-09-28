import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/Layout';
import Menu from './components/Menu';

class Exams extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Menu />
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
