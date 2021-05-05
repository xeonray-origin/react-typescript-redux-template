import React, { useMemo } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Topnavigation } from '@components/partials';
import PageRoutes from '@routes';

export default () => {
  const topbar = useMemo(() => <Topnavigation />, []);

  return (
    <>
      {topbar}
      <Router>{PageRoutes}</Router>
    </>
  );
};
