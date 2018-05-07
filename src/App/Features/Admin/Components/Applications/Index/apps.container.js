import { connect } from 'react-redux';
import Apps from './apps';
import { getApps } from '../../../Store/Actions/applications';
import { getApps as getCurrentApps } from '../../../Store/Selectors/';

const mapStateToProps = state => ({
  apps: getCurrentApps(state),
});

const mapDispatchToProps = dispatch => ({
  getApps: () => dispatch(getApps()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Apps);
