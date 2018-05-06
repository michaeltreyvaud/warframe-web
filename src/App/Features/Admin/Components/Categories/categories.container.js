import { connect } from 'react-redux';
import Categories from './categories';
import {
  create,
  setValue,
} from '../../Store/Actions/categories';
import { getCreateCategoryTitle, getCreateCategoryDescription } from '../../Store/Selectors/';

const mapStateToProps = state => ({
  title: getCreateCategoryTitle(state),
  description: getCreateCategoryDescription(state),
});

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  create: body => dispatch(create(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
