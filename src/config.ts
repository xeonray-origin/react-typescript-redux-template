import { createMuiTheme, Theme, Link } from '@material-ui/core';
import constants from './cosntants';

export const AppLogo: string = '/static/icons/logo.png';

export const resources = constants;

export const NavigationMenuItems: Array<string> = [
  'Home',
  'Products',
  'Blogs',
  'Dashboard',
];

export const theme: Theme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#212121',
      white: '#f1f1f2',
    },
    primary: {
      main: '#efa21d',
      light: '#FFCB05',
    },
    secondary: {
      main: '#1a1a1a',
      light: '#e6e6e6',
    },
    background: {
      default: '#e1e1e1',
      paper: '#f1f1f2',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          scrollBehavior: 'smooth',
        },
      },
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  typography: {
    htmlFontSize: 12,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
  },
});
