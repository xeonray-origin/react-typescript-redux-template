import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { ISectionConfig } from '@types';

const SectionHOC = (props: ISectionConfig) => {
  const { cardConfig } = props;
  console.log(cardConfig, props);
  switch (cardConfig.type) {
    case 'Blogs':
      return (
        <div id={'Blogs'}>
          <Typography variant={'h2'}>{cardConfig.data.title}</Typography>
          <Typography variant={'h5'}>{cardConfig.data.text}</Typography>
        </div>
      );
    case 'Products':
      return (
        <div id={'Products'}>
          <Typography variant={'h2'}>{cardConfig.data.title}</Typography>
          <Typography variant={'h5'}>{cardConfig.data.text}</Typography>
        </div>
      );
    case 'HERO_SECTION':
      return (
        <div id={'Home'}>
          <Typography variant={'h2'}>HERO</Typography>
          <Typography variant={'h5'}>{cardConfig.data.text}</Typography>
        </div>
      );
  }
};

export default SectionHOC;
