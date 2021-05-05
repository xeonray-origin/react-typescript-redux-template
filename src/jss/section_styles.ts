import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
export const sectionStyles = (theme: Theme) =>
  createStyles({
    card:{
      width:'100%',
      backgroundPosition:'center',
      backgroundSize:'fill',
      minHeight:'30rem',
      boxShadow:'0px 0px 8px 0px white inset'
    }
  });
