import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import './table.css';

const LoadingContainer = () => (
  <div className="table-loading">
    <ReactLoading
      type="spin"
      color="#23b7e5"
      delay={0}
    />
  </div>
);

const Table = ({ headers, rows, loading }) => {
  if (loading) return <LoadingContainer />;
  return (
    <table className="table">
      <thead>
        <tr>
          {headers && headers.map(header => <th>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows && rows.map(item => (
          <tr key={item.id} >
            <td >{item.id}</td>
            <td >{item.lineOfBusiness || item.applicationName || item.title}</td>
          </tr>))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default Table;
