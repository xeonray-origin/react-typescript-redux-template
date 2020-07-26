import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const DashboardPage = (props: any) => {
  return (
    <>
      <Typography variant={'h2'}>Dashboard</Typography>
    </>
  );
};

export default connect(null, null)(DashboardPage);
