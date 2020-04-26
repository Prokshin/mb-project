import { USER_REQUEST } from '../types';

export const userRequest = (userId) => {
  return {
    type: USER_REQUEST,
    payload: { userId },
  };
};