import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Content from '../Common/Content';
import Aside from '../Common/Aside';
import Signup from '../Routes/Auth/signup';
import Login from '../Routes/Auth/login';

const testing = () => <h1>Home Page</h1>;

const asideOptions = [{
  key: '1',
  Dashboard: {
    title: 'Dashboard',
    hasSubsections: true,
    link: '/dashboard',
    items: [{
      viewSchedule: {
        title: 'View Schedule',
        hasSubsections: false,
        link: '/schedule',
      },
    }],
  },
}, {
  key: '2',
  Administration: {
    title: 'Administration',
    hasSubsections: true,
    link: '/admin',
    items: [{
      applications: {
        title: 'Applications',
        hasSubsections: false,
        link: '/applications',
      },
      penTests: {
        title: 'Penetration Tests',
        hasSubsections: false,
        link: '/pentests',
      },
      findingCategories: {
        title: 'Findings Categories',
        hasSubsections: false,
        link: '/categories',
      },
    }],
  },
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
