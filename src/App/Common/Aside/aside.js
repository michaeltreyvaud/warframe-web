import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Styles = {
  aside: {
    position: 'fixed',
    top: '55px',
    left: '0px',
    height: '100%',
    backgroundColor: 'white',
    width: '80px',
    overflowY: 'auto',
  },
  contents: {

  },
  item: {
    textDecoration: 'none',
  },
};

const Item = ({ item }) => (
  <div>
    <Link to={item.link} style={Styles.item}>{item.title}</Link>
  </div>
);

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

const Aside = ({ options }) => (
  <aside style={Styles.aside}>
    <div style={Styles.contents}>
      {options && options.map(option => <Item item={option} key={option.key} />)}
    </div>
  </aside>
);

Aside.propTypes = {
  options: PropTypes.array,
};

Aside.defaultProps = {
  options: [],
};

export default Aside;
