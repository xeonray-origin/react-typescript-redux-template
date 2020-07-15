import { combinedReducer } from '@reducers';
import { StateType } from 'typesafe-actions';
import { Theme } from '@material-ui/core';

export type StoreState = StateType<ReturnType<typeof combinedReducer>>;

export interface IAppStateType {
  theme: Theme;
  screenWidth: number;
}
