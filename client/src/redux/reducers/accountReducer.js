import {
  ACCOUNT_CURRENT_SUCCESS,
  ACCOUNT_FULL_BALANCE_SUCCESS,
  ACCOUNT_MIN_SUCCESS,
} from '../types';

const initioalState = {
  fullBalance: 0,
  currentAccount: null,
  accounts: [],
};

export const accountReducer = (state = initioalState, action) => {
  switch (action.type) {
    case ACCOUNT_FULL_BALANCE_SUCCESS:
      return {
        ...state,
        fullBalance: action.payload,
      };
    case ACCOUNT_CURRENT_SUCCESS:
      return {
        ...state,
        currentAccount: action.payload,
      };
    case ACCOUNT_MIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        accounts: action.payload,
      };
    default:
      return state;
  }
};