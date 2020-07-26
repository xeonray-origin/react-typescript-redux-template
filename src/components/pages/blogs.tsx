import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const BlogsPage = (props: any) => {
  return (
    <>
      <Typography variant={'h2'}>Blogs</Typography>
    </>
  );
};

export default connect(null, null)(BlogsPage);
