import { connect } from 'react-redux';
import Signup from './signup';
import { setValue, signup } from '../../Store/Actions/signup';
import {
  getSignupEmail,
  getFirstName,
  getSecondName,
  getPassword,
  getConfirmPassword,
} from '../../Store/Selectors';

const mapStateToProps = state => ({
  email: getSignupEmail(state),
  firstName: getFirstName(state),
  secondName: getSecondName(state),
  password: getPassword(state),
  confirmPassword: getConfirmPassword(state),
});

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  signup: body => dispatch(signup(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
