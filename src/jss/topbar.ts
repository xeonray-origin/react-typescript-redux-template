import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
export const topbarStyles = (theme: Theme) =>
  createStyles({
    topbarInit: {
      minHeight: 140,
      width: '100%',
      backgroundColor: theme.palette.background.default,
    },
    logoInit: {
      height: '4rem',
      padding: theme.spacing(1, 1, 1, 0),
    },
    grow: {
      flexGrow: 1,
    },
    menu: {
      marginRight: theme.spacing(5),
    },
    menuLink: {
      padding: theme.spacing(1),
      fontFamily: 'Roboto',
      fontSize: '1.2rem',
      color: theme.palette.common.black,
      '&:hover': {
        cursor: 'pointer',
        fontWeight: 600,
        textDecoration: 'none',
      },
    },
  });
