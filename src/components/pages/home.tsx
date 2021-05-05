import React from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Typography } from '@material-ui/core';
import {Section} from '@components/base'



const HomePage = (props: any) => {
  return (
    <>
      <Grid container justify="center" direction="row" alignContent="center">
          <Section><Typography>asdsd</Typography></Section>
      
      </Grid>
    </>
  );
};

export default connect(null, null)(HomePage);
