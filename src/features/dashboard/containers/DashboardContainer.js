import { connect } from 'react-redux';
import Dashboard from '../component/Dashboard';
import { logoutUser } from '../../../actions/auth';
import { fetchUserInfo } from '../../../actions/user';

const mapStateToProps = state => ({
  user: state.user.userInfo,
});

const mapDispatchToProps = () => dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  fetchUserInfo: () => dispatch(fetchUserInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
