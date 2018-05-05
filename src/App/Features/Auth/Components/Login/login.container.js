import { connect } from 'react-redux';
import Login from './login';
import { setValue, login } from '../../Store/Actions/login';
import {
  getCurrentToken,
  getLoginUsername,
  getLoginPassword,
  getLoginAttempt,
} from '../../Store/Selectors';

const mapStateToProps = state => ({
  token: getCurrentToken(state),
  username: getLoginUsername(state),
  password: getLoginPassword(state),
  attempt: getLoginAttempt(state),
});

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  login: body => dispatch(login(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
