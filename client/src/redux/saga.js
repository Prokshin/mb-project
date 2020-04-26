import { put, takeEvery } from 'redux-saga/effects';
import {
  ACCOUNT_FULL_BALANCE_REQUEST,
  LOGIN_REQUEST,
  USER_LOAD_SUCCESS,
  USER_REQUEST,
} from './types';
import UserAPI from '../API/UserAPI';
import { loginSuccess } from './actions/loginActions';
import AccountAPI from '../API/AccountAPI';
import { fullBalanceSuccess } from './actions/accountActions';

function* checkLogin() {
  yield put(loginSuccess('1'));
}

function* loadUser(action) {
  try {
    if (action.payload.userId) {
      const userAPI = new UserAPI();
      const data = yield userAPI.getUser(action.payload.userId).then(res => res);
      yield put({
        type: USER_LOAD_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    console.error('gg');
  }
}

function* loadFullBalance() {
  try {
    const accountAPI = new AccountAPI();
    const data = yield accountAPI.getFullBalance().then(res => res);
    console.log(data);
    //TODO:CREATE REDUCER
    yield put(fullBalanceSuccess(data));
  } catch (e) {

  }
}

function* saga() {
  yield takeEvery(LOGIN_REQUEST, checkLogin);
  yield takeEvery(USER_REQUEST, loadUser);
  yield takeEvery(ACCOUNT_FULL_BALANCE_REQUEST, loadFullBalance);
}

export default saga;