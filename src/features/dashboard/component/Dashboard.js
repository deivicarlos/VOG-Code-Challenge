import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../../components/Navbar/Navbar';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { fetchUserInfo } = this.props;
    fetchUserInfo();
  }
  render() {
    const { logoutUser, user } = this.props;

    return (
      <React.Fragment>
        <Navbar user={user} logoutUser={logoutUser} />
        <Jumbotron />
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default Dashboard;
