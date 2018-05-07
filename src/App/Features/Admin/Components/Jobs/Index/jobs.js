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
    const { jobs } = this.props;
    return (
      <Panel title="Current Jobs" >
        <Table headers={['Id', 'Line of Business']} rows={jobs} />
      </Panel>
    );
  }
}

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  getJobs: PropTypes.func.isRequired,
};

export default Jobs;
