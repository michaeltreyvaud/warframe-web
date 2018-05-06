import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';

const Styles = {
  table: {
    marginBottom: 0,
    border: 0,
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontFamily: '"Source Sans Pro", sans-serif',
    color: '#656565',
  },
  head: {
    fontFamily: '"Source Sans Pro", sans-serif',
    color: '#656565',
    fontSize: '14px',
    lineHeight: '1.52857',
    direction: 'ltr',
    borderCollapse: 'collapse',
  },
  th: {
    borderTop: 0,
    padding: '14px 8px',
    color: '#888',
    borderBottomWidth: '1px',
    verticalAlign: 'bottom',
    borderBottom: '2px solid #eee',
    lineHeight: 1.52857,
    textAlign: 'left',
  },
  tr: {
    display: 'table-row',
    verticalAlign: 'inherit',
    borderColor: 'inherit',
    borderCollapse: 'collapse',
  },
  td: {
    verticalAlign: 'middle',
    padding: '8px',
    lineHeight: 1.52857,
    borderTop: '1px solid #eee',
  },
};

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.props.getJobs();
  }
  render() {
    const { jobs } = this.props;
    return (
      <Panel title="Current Jobs" >
        <table style={Styles.table}>
          <thead style={Styles.head}>
            <tr style={Styles.tr}>
              <th style={Styles.th}>Id</th>
              <th style={Styles.th}>Line of Business</th>
            </tr>
          </thead>
          <tbody>
            {jobs && jobs.map(job => (
              <tr style={Styles.tr} key={`${job.id}::${job.lineOfBusiness}`}>
                <td style={Styles.td}>{job.id}</td>
                <td style={Styles.td}>{job.lineOfBusiness}</td>
              </tr>))}
          </tbody>
        </table>
      </Panel>
    );
  }
}

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
  getJobs: PropTypes.func.isRequired,
};

export default Jobs;
