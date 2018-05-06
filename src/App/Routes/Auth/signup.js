import React from 'react';
import Signup from '../../Features/Auth/Components/Signup';

const Styles = {
  content: {
    width: '50%',
  },
};

const SignupRoute = () => (
  <section style={Styles.content}>
    <Signup />
  </section>
);

export default SignupRoute;
