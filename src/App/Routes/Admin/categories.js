import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../../Features/Admin/Components/Categories/Index';
import CreateCategory from '../../Features/Admin/Components/Categories/Create';

const Styles = {
  content: {
    width: '100%',
  },
};

const IndexRoute = () => (
  <section style={Styles.content}>
    <Index />
  </section>
);

const CreateCategoryRoute = () => (
  <section style={Styles.content}>
    <CreateCategory />
  </section>
);

const Routing = () => (
  <Switch>
    <Route exact path="/admin/categories" component={IndexRoute} />
    <Route exact path="/admin/categories/create" component={CreateCategoryRoute} />
  </Switch>
);

export default Routing;
