import { connect } from 'react-redux';
import Jobs from './jobs';
import { getJobs } from '../../../Store/Actions/jobs';
import { getJobs as getCurrentJobs } from '../../../Store/Selectors/';

const mapStateToProps = state => ({
  jobs: getCurrentJobs(state),
});

const mapDispatchToProps = dispatch => ({
  getJobs: () => dispatch(getJobs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
