import React, { useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
