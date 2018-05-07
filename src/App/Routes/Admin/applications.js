import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../../Features/Admin/Components/Applications/Index';
import CreateApplication from '../../Features/Admin/Components/Applications/Create';

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

const CreateAppRoute = () => (
  <section style={Styles.content}>
    <CreateApplication />
  </section>
);

const Routing = () => (
  <Switch>
    <Route exact path="/admin/applications" component={IndexRoute} />
    <Route exact path="/admin/applications/create" component={CreateAppRoute} />
  </Switch>
);

export default Routing;
