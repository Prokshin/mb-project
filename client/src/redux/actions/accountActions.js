import {
  ACCOUNT_CURRENT_SUCCESS,
  ACCOUNT_FULL_BALANCE_REQUEST,
  ACCOUNT_FULL_BALANCE_SUCCESS,
  ACCOUNT_MIN_REQUEST,
  ACCOUNT_MIN_SUCCESS,
  ACCOUNT_SET_CURRENT,
} from '../types';

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
export const setCurrentAccount = (id) => {
  return {
    type: ACCOUNT_SET_CURRENT,
    payload: id,
  };
};

export const currentAccountSuccess = (payload) => {
  return {
    type: ACCOUNT_CURRENT_SUCCESS,
    payload,
  };
};

export const accountsMinRequest = () => {
  return {
    type: ACCOUNT_MIN_REQUEST,
  };
};

export const accountsMinSuccess = (payload) => {
  return {
    type: ACCOUNT_MIN_SUCCESS,
    payload,
  };
};