import { connect } from 'react-redux';
import Create from './create';
import {
  create,
  setValue,
} from '../../../Store/Actions/applications';
import { getCreateApplicationName } from '../../../Store/Selectors/';

const mapStateToProps = state => ({
  applicationName: getCreateApplicationName(state),
});

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  create: body => dispatch(create(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
