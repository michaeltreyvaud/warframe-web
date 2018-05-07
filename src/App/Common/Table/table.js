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

const Table = ({ rows, loading }) => {
  if (loading) return <LoadingContainer />;
  return (
    <table className="table">
      <thead>
        <tr>
          {rows && rows[0] && Object.keys(rows[0]).map(key => (<th>{key}</th>))}
        </tr>
      </thead>
      <tbody>
        {rows && rows.map((item) => {
          const tds = Object.keys(item).map(key => (<td >{item[key]}</td>));
          return (
            <tr key={item.id} >
              {tds}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  rows: PropTypes.array.isRequired,
};

export default Table;
