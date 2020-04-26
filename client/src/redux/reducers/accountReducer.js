import { ACCOUNT_FULL_BALANCE_SUCCESS } from '../types';

export const accountReducer = (state = { fullBalance: 0 }, action) => {
  switch (action.type) {
    case ACCOUNT_FULL_BALANCE_SUCCESS:
      return {
        ...state,
        fullBalance: action.payload,
      };
    default:
      return state;
  }
};