import { ACCOUNT_FULL_BALANCE_REQUEST, ACCOUNT_FULL_BALANCE_SUCCESS } from '../types';

export const fullBalanceRequest = () => {
  return {
    type: ACCOUNT_FULL_BALANCE_REQUEST,
  };
};
export const fullBalanceSuccess = (payload) => {
  return {
    type: ACCOUNT_FULL_BALANCE_SUCCESS,
    payload,
  };
};
//TODO:CREATE REDUCER