import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Content from '../Common/Content';
import Aside from '../Common/Aside';
import Signup from '../Routes/Auth/signup';
import Login from '../Routes/Auth/login';
import Jobs from '../Routes/Admin/jobs';
import Applications from '../Routes/Admin/applications';
import Categories from '../Routes/Admin/categories';
import NoMatch from '../Routes/NoMatch';

const Home = () => <h1>Home Page</h1>;

const asideOptions = [{
  key: 'parent1',
  title: 'Dashboard',
  hasSubsections: true,
  link: '/dashboard',
  items: [{
    key: 'DashboardChild1',
    title: 'View Schedule',
    hasSubsections: false,
    link: '/schedule',
  }],
}, {
  key: 'parent2',
  title: 'Administration',
  hasSubsections: true,
  link: '/admin',
  items: [{
    key: 'AdministrationChild1',
    title: 'Applications',
    hasSubsections: true,
    link: '/admin/applications',
    items: [{
      key: 'JobsChild1',
      title: 'Create',
      hasSubsections: false,
      link: '/admin/applications/create',
    }],
  }, {
    key: 'AdministrationChild2',
    title: 'Jobs',
    hasSubsections: true,
    link: '/admin/jobs',
    items: [{
      key: 'JobsChild1',
      title: 'Create',
      hasSubsections: false,
      link: '/admin/jobs/create',
    }],
  }, {
    key: 'AdministrationChild3',
    title: 'Penetration Tests',
    hasSubsections: false,
    link: '/pentests',
  }, {
    key: 'AdministrationChild4',
    title: 'Findings Categories',
    hasSubsections: false,
    link: '/admin/categories',
  }],
}];

const AppRouter = () => (
  <div>
    <Navbar />
    <Aside options={asideOptions} />
    <Content containsAside>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/admin/jobs" component={Jobs} />
        <Route exact path="/admin/jobs/create" component={Jobs} />
        <Route exact path="/admin/applications" component={Applications} />
        <Route exact path="/admin/applications/create" component={Applications} />
        <Route exact path="/admin/categories" component={Categories} />
        <Route default component={NoMatch} />
      </Switch>
    </Content>
  </div>
);

export default AppRouter;
