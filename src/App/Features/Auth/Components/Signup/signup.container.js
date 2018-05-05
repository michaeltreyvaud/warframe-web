import { connect } from 'react-redux';
import Signup from './signup';
import { setValue, attempt } from '../../Store/Actions/signup';

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  signup: () => dispatch(attempt()),
});

export default connect(null, mapDispatchToProps)(Signup);
