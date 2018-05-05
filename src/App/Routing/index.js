import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Content from '../Common/Content';
import Signup from '../Routes/Auth/signup';

const testing = () => <h1>Home Page</h1>;
const AppRouter = () => (
  <div>
    <Navbar />
    <Content>
      <Switch>
        <Route exact path="/" component={testing} />
        <Route exact path="/auth/signup" component={Signup} />
      </Switch>
    </Content>
  </div>
);

export default AppRouter;
