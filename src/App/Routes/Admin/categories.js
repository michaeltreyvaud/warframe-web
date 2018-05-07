import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../../Features/Admin/Components/Categories/Index';
import CreateCategory from '../../Features/Admin/Components/Categories/Create';
import Header from '../../Common/Header';
import Page from '../../Common/Page';

const IndexRoute = () => (
  <Page>
    <Header title="Categories" />
    <Index />
  </Page>
);

const CreateCategoryRoute = () => (
  <Page>
    <Header title="Create Category" />
    <CreateCategory />
  </Page>
);

const Routing = () => (
  <Switch>
    <Route exact path="/admin/categories" component={IndexRoute} />
    <Route exact path="/admin/categories/create" component={CreateCategoryRoute} />
  </Switch>
);

export default Routing;
