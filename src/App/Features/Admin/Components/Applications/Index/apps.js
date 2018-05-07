import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Table from '../../../../../Common/Table';

class Apps extends Component {
  constructor(props) {
    super(props);
    this.props.getApps();
  }
  render() {
    const { apps } = this.props;
    return (
      <Panel title="Current Jobs" >
        <Table headers={['Id', 'Application Name']} rows={apps} />
      </Panel>
    );
  }
}

Apps.propTypes = {
  apps: PropTypes.array.isRequired,
  getApps: PropTypes.func.isRequired,
};

export default Apps;