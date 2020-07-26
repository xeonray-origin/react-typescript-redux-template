import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import { pageStyles } from '@jss';
import { ErrorBoundary } from 'react-error-boundary';
import { resources } from '@config';
import { StoreState } from '@types';

const PageFallback = (error: React.ErrorInfo & { error: Error }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h5" style={{ color: 'red' }}>
          {resources.error.pageDefaultError}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" style={{ textAlign: 'center', color: 'red' }}>
          {get(error, 'error.message')}
        </Typography>
      </Grid>
    </Grid>
  );
};

interface IPageProps
  extends RouteComponentProps,
    WithStyles<typeof pageStyles>,
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {
  children: any;
}

const Page = (props: IPageProps) => {
  const { classes, children } = props;
  return (
    <>
      <div className={classes.mainPanel}>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

const PageWithHOCs = withStyles(pageStyles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Page)),
);

export default (Component: any) => (props: any) => {
  return (
    <PageWithHOCs>
      <ErrorBoundary FallbackComponent={PageFallback}>
        <Component {...props} />
      </ErrorBoundary>
    </PageWithHOCs>
  );
};
