import React from 'react';
import Jobs from '../../Features/Admin/Components/Jobs';

const Styles = {
  content: {
    width: '100%',
  },
};

const JobsRoute = () => (
  <section style={Styles.content}>
    <Jobs />
  </section>
);

export default JobsRoute;
