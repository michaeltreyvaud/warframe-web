import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../../Features/Admin/Components/Jobs/Index';
import CreateJob from '../../Features/Admin/Components/Jobs/Create';
import Header from '../../Common/Header';
import Page from '../../Common/Page';

const IndexRoute = () => (
  <Page>
    <Header title="Jobs" />
    <Index />
  </Page>
);

const CreateJobRoute = () => (
  <Page>
    <Header title="Create Job" />
    <CreateJob />
  </Page>
);

const Routing = () => (
  <Switch>
    <Route exact path="/admin/jobs" component={IndexRoute} />
    <Route exact path="/admin/jobs/create" component={CreateJobRoute} />
  </Switch>
);

export default Routing;
