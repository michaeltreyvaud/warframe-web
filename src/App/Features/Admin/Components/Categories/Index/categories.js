import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Table from '../../../../../Common/Table';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.props.getCategories();
  }
  render() {
    const { loading, categories } = this.props;
    return (
      <Panel title="Current Categories" >
        <Table rows={categories} loading={loading} />
      </Panel>
    );
  }
}

Categories.propTypes = {
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired,
};

export default Categories;
