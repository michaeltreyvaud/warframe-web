import { connect } from 'react-redux';
import Categories from './categories';
import { getCategories } from '../../../Store/Actions/categories';
import { getCategories as getCurrentCategories } from '../../../Store/Selectors/';

const mapStateToProps = state => ({
  categories: getCurrentCategories(state),
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
