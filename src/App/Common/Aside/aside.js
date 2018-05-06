import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './aside.css';

const Item = ({ item }) => (
  <li>
    <div className="aside-nav-item">
      <Link to={item.link} className="aside-nav-item-link">{item.title}</Link>
      {item.hasSubsections && item.items && item.items.length > 0 &&
        item.items.map(option => <Item item={option} key={option.key} />)}
    </div>
  </li>
);

Item.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hasSubsections: PropTypes.bool.isRequired,
  }).isRequired,
};

const Aside = ({ options }) => (
  <aside className="aside">
    <nav>
      <ul>
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
