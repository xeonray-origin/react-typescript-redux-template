import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Typography } from '@material-ui/core';
import { theme } from '@config';
import { AppFrame } from '@components/base';
import { store } from '@store';
import { Provider, connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  theme: state.app.theme,
});

const App = connect(
  mapStateToProps,
  null,
)(() => (
  <>
    <ThemeProvider theme={theme}>
      <AppFrame />
    </ThemeProvider>
  </>
));

const Layout = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Layout />, document.getElementById('root'));
