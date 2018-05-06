import { connect } from 'react-redux';
import CreateJob from './create';
import {
  create,
  setValue,
} from '../../../Store/Actions/jobs';
import { getCreateLineOfBusiness } from '../../../Store/Selectors/';

const mapStateToProps = state => ({
  lineOfBusiness: getCreateLineOfBusiness(state),
});

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  create: body => dispatch(create(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
