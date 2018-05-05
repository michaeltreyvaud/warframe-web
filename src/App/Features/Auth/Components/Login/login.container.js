import { connect } from 'react-redux';
import Login from './login';
import { setValue, login } from '../../Store/Actions/login';
import {
  getLoginUsername,
  getLoginPassword,
} from '../../Store/Selectors';

const mapStateToProps = state => ({
  username: getLoginUsername(state),
  password: getLoginPassword(state),
});

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  login: body => dispatch(login(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
