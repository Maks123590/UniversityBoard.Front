import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/Layout';

class Exams extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location} />
    );
  }
}

Exams.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Exams;
