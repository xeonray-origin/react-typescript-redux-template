import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const HomePage = (props: any) => {
  return (
    <>
      <Typography variant={'h2'}>home</Typography>
    </>
  );
};

export default connect(null, null)(HomePage);
