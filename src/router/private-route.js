import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const { component: Component, isAuthenticated, ...rest } = props;

  /* If user is not authenticated, redirect to login screen */
  if (!isAuthenticated) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Redirect to="/" />
      </Suspense>
    );
  }

  // If user is authenticated then user is taked to the main application
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route {...rest} render={routeProps => <Component {...routeProps} />} />
    </Suspense>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(PrivateRoute);
