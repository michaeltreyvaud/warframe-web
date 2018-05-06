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
    width: '220px',
    overflowY: 'auto',
  },
  contents: {

  },
  navItem: {
    padding: '12px 24px',
    link: {
      textDecoration: 'none',
      color: '#515253',
      letterSpacing: '.025em',
      fontWeight: 'normal',
      wordWrap: 'break-word',
    },
  },
  ul: {
    marginTop: '0px',
    marginBottom: 0,
    paddingLeft: 0,
    listStyle: 'none',
  },
  li: {
    fontSize: '14px',
  },
};

const Item = ({ item }) => (
  <li style={Styles.li}>
    <div style={Styles.navItem}>
      <Link to={item.link} style={Styles.navItem.link}>{item.title}</Link>
      {item.hasSubsections && item.items && item.items.length > 0 &&
        item.items.map(option => <Item item={option} key={option.key} />)}
    </div>
  </li>
);

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

const Aside = ({ options }) => (
  <aside style={Styles.aside}>
    <nav style={Styles.contents}>
      <ul style={Styles.ul}>
        {options && options.map(option => <Item item={option} key={option.key} />)}
      </ul>
    </nav>
  </aside>
);

Aside.propTypes = {
  options: PropTypes.array,
};

Aside.defaultProps = {
  options: [],
};

export default Aside;
