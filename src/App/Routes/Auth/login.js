import React from 'react';
import Login from '../../Features/Auth/Components/Login';

const Styles = {
  content: {
    width: '50%',
  },
};

const LoginRoute = () => (
  <section style={Styles.content}>
    <Login />
  </section>
);

export default LoginRoute;
