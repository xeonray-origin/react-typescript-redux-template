import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const ProductsPage = (props: any) => {
  return (
    <>
      <Typography variant={'h2'}>Products</Typography>
    </>
  );
};

export default connect(null, null)(ProductsPage);
