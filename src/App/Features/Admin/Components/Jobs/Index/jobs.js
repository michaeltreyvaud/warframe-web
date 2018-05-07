import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Table from '../../../../../Common/Table';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.props.getJobs();
  }
  render() {
    const { loading, jobs } = this.props;
    return (
      <Panel>
        <Table rows={jobs} loading={loading} />
      </Panel>
    );
  }
}

Jobs.propTypes = {
  loading: PropTypes.bool.isRequired,
  jobs: PropTypes.array.isRequired,
  getJobs: PropTypes.func.isRequired,
};

export default Jobs;
