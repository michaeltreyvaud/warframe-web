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
    const { loading, apps } = this.props;
    return (
      <Panel>
        <Table rows={apps} loading={loading} />
      </Panel>
    );
  }
}

Apps.propTypes = {
  loading: PropTypes.bool.isRequired,
  apps: PropTypes.array.isRequired,
  getApps: PropTypes.func.isRequired,
};

export default Apps;
