import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Content from '../Common/Content';
import Aside from '../Common/Aside';
import Signup from '../Routes/Auth/signup';
import Login from '../Routes/Auth/login';

const testing = () => <h1>Home Page</h1>;

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
    hasSubsections: false,
    link: '/applications',
  }, {
    key: 'AdministrationChild2',
    title: 'Penetration Tests',
    hasSubsections: false,
    link: '/pentests',
  }, {
    key: 'AdministrationChild3',
    title: 'Findings Categories',
    hasSubsections: false,
    link: '/categories',
  }],
}];

const AppRouter = () => (
  <div>
    <Navbar />
    <Aside options={asideOptions} />
    <Content>
      <Switch>
        <Route exact path="/" component={testing} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/auth/login" component={Login} />
      </Switch>
    </Content>
  </div>
);

export default AppRouter;
