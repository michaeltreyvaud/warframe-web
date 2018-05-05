import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from '../Routes/Auth/signup';

const testing = () => <h1>Home Page</h1>;
const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={testing} />
      <Route exact path="/auth/signup" component={Signup} />
    </Switch>
  </div>
);

export default AppRouter;
