import { combineReducers } from 'redux';
import { appReducer } from './app';

export const combinedReducer = combineReducers({
  app: appReducer,
});
