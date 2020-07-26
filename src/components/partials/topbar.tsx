import React from 'react';
import {
  AppBar,
  Toolbar,
  withStyles,
  WithStyles,
  Link,
  Theme,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { topbarStyles } from '@jss';
import { AppLogo, NavigationMenuItems } from '@config';

interface ITopbarProps extends WithStyles<typeof topbarStyles> {
  classes: any;
  theme: Theme;
  screenWidth: number;
}

const Topbar = (props: ITopbarProps) => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar className={classes.topbarInit}>
        <img className={classes.logoInit} src={AppLogo} alt="app-logo" />
        <div className={classes.grow} />
        <div className={classes.menu}>
          {NavigationMenuItems.map(item => (
            <Link
              key={item}
              className={classes.menuLink}
              href={item === 'Dashboard' ? '/' + item : 'Home#' + item}
            >
              {item}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: any) => ({
  theme: state.app.theme,
  screenWidth: state.app.screenWidth,
});

export default withStyles(topbarStyles)(connect(mapStateToProps, null)(Topbar));
