import React, { Children } from 'react';
import { Typography, Grid, Card, withStyles, WithStyles } from '@material-ui/core';
import { ISectionConfig } from '@types';
import {sectionStyles} from '@jss'


export interface ISectionProps extends WithStyles {
  children: any
}


const SectionHOC = (props:ISectionProps) => {
  const {children, classes} = props;
  return (
    <Card className={classes.card} style={{ backgroundImage:`url(${'./../../static/imgs/white_background_1.jpg'})`}}>
      {children}
    </Card>
  );
};

export default withStyles(sectionStyles)(SectionHOC);
