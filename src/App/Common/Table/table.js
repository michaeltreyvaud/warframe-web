import React from 'react';
import PropTypes from 'prop-types';
import './table.css';

const Table = ({ headers, rows }) => (
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
          <td >{item.lineOfBusiness}</td>
        </tr>))}
    </tbody>
  </table>
);

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default Table;
