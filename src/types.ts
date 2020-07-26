import { combinedReducer } from '@reducers';
import { StateType } from 'typesafe-actions';
import { Theme } from '@material-ui/core';

export type StoreState = StateType<ReturnType<typeof combinedReducer>>;

export interface IAppStateType {
  theme: Theme;
  screenWidth: number;
}

export interface ISectionConfigData {
  title: string;
  text?: string;
  sectionImg?: Array<string>;
}

export interface ISectionConfig {
  type: 'ABOUT_US_SECTION' | 'HERO_SECTION';
  data: ISectionConfigData;
}

export interface ISectionProps {
  cardConfig: Array<ISectionConfig>;
}
