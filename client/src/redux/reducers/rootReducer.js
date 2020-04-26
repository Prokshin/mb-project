import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { userReducer } from './userReducer';
import { accountReducer } from './accountReducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  account: accountReducer,
});

