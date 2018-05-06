import React from 'react';
import Applications from '../../Features/Admin/Components/Applications';

const Styles = {
  content: {
    width: '100%',
  },
};

const ApplicationsRoute = () => (
  <section style={Styles.content}>
    <Applications />
  </section>
);

export default ApplicationsRoute;
