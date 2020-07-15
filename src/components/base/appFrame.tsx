import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Topnavigation } from '@components/partials';
import routes from '@routes';

export default () => {
  return (
    <>
      <Topnavigation />
      <Router>{routes}</Router>
    </>
  );
};
