import React from 'react';
import Categories from '../../Features/Admin/Components/Categories';

const Styles = {
  content: {
    width: '100%',
  },
};

const CategoriesRoute = () => (
  <section style={Styles.content}>
    <Categories />
  </section>
);

export default CategoriesRoute;
