import { connect } from 'react-redux';
import Login from '../component/Login';
import { loginUser } from '../../../actions/auth';

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = () => dispatch => ({
  loginUser: (username, password) => dispatch(loginUser(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
