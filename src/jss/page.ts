import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
export const pageStyles = (theme: Theme) =>
  createStyles({
    mainPanel: {
      position: 'fixed',
      transition: theme.transitions.create([
        'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
      ]),
      height: '100vh',
      width: '100%',
      overflowScrolling: 'touch',
    },
    content: {
      padding: '0.25rem 0.5rem',
      minHeight: 'calc(100vh - 7rem)',
      backgroundColor: theme.palette.background.default,
    },
  });
