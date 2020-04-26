import { put, takeEvery } from 'redux-saga/effects';
import {
  ACCOUNT_FULL_BALANCE_REQUEST,
  ACCOUNT_MIN_REQUEST,
  ACCOUNT_SET_CURRENT,
  LOGIN_REQUEST,
  USER_LOAD_SUCCESS,
  USER_REQUEST,
} from './types';
import UserAPI from '../API/UserAPI';
import { loginSuccess } from './actions/loginActions';
import AccountAPI from '../API/AccountAPI';
import {
  accountsMinSuccess,
  currentAccountSuccess,
  fullBalanceSuccess,
} from './actions/accountActions';

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
    yield put(fullBalanceSuccess(data));
  } catch (e) {

  }
}

function* loadCurrentAccount(action) {
  console.log('i alive');
  const accountAPI = new AccountAPI();
  const data = yield  accountAPI.getAccountInfo().then(res => res);
  yield put(currentAccountSuccess(data));
}

function* loadAccounts() {
  const accountAPI = new AccountAPI();
  const data = yield  accountAPI.getAccounts().then(res => res);
  console.log(data);
  yield  put(accountsMinSuccess(data));
}

function* saga() {
  yield takeEvery(LOGIN_REQUEST, checkLogin);
  yield takeEvery(USER_REQUEST, loadUser);
  yield takeEvery(ACCOUNT_FULL_BALANCE_REQUEST, loadFullBalance);
  yield takeEvery(ACCOUNT_SET_CURRENT, loadCurrentAccount);
  yield takeEvery(ACCOUNT_MIN_REQUEST, loadAccounts);
}

export default saga;