import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combinedReducer } from '@reducers';

export const store = createStore(
  combinedReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(thunkMiddleware),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    : applyMiddleware(thunkMiddleware),
);
