import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { ISectionConfig } from '@types';

const SectionHOC = (props: ISectionConfig) => {
  const { cardConfig } = props;
  return (
    <div id={cardConfig.type}>
      <Typography variant={'h2'}>{cardConfig.data.title}</Typography>
      <Typography variant={'h5'}>{cardConfig.data.text}</Typography>
    </div>
  );
};

export default SectionHOC;
