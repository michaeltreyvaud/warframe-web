import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../../Features/Admin/Components/Applications/Index';
import CreateApplication from '../../Features/Admin/Components/Applications/Create';
import Header from '../../Common/Header';
import Page from '../../Common/Page';

const IndexRoute = () => (
  <Page>
    <Header title="Applications" />
    <Index />
  </Page>
);

const CreateAppRoute = () => (
  <Page>
    <Header title="Create Application" />
    <CreateApplication />
  </Page>
);

const Routing = () => (
  <Switch>
    <Route exact path="/admin/applications" component={IndexRoute} />
    <Route exact path="/admin/applications/create" component={CreateAppRoute} />
  </Switch>
);

export default Routing;
