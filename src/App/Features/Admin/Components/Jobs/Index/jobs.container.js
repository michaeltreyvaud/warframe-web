import { connect } from 'react-redux';
import Jobs from './jobs';
import { getJobs } from '../../../Store/Actions/jobs';
import { getJobs as getCurrentJobs, getJobsLoading } from '../../../Store/Selectors/';

const mapStateToProps = state => ({
  jobs: getCurrentJobs(state),
  loading: getJobsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getJobs: () => dispatch(getJobs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
