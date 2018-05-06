import React from 'react';
import Jobs from '../../Features/Admin/Components/Jobs';

const Styles = {
  content: {
    width: '100%',
  },
};

const LoginRoute = () => (
  <section style={Styles.content}>
    <Jobs />
  </section>
);

export default LoginRoute;
