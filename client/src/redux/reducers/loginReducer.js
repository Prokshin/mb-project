import { LOGIN_SUCCESS } from '../types';

export const loginReducer = (state = {
  isLogin: false,
  userId: null,
}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        userId: action.payload.id,
      };
    default:
      return state;
  }
};