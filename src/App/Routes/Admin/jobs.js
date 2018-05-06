import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexJob from '../../Features/Admin/Components/Jobs/Index';
import CreateJob from '../../Features/Admin/Components/Jobs/Create';

const Styles = {
  content: {
    width: '100%',
  },
};

const IndexRoute = () => (
  <section style={Styles.content}>
    <IndexJob />
  </section>
);

const CreateJobRoute = () => (
  <section style={Styles.content}>
    <CreateJob />
  </section>
);

const Routing = () => (
  <Switch>
    <Route exact path="/admin/jobs" component={IndexRoute} />
    <Route exact path="/admin/jobs/create" component={CreateJobRoute} />
  </Switch>
);
export default Routing;
