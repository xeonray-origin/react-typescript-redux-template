import { theme } from '@config';
import { IAppStateType } from '@types';

const initialState: IAppStateType = {
  theme: theme,
  screenWidth: window.innerWidth,
};

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'DARK_MODE':
      return state;
    default:
      return state;
  }
};
