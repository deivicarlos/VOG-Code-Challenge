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
      <div>
        {/*<Navbar user={user} logoutUser={logoutUser} />
        <Jumbotron />*/}
      </div>
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
