import { put, takeEvery } from 'redux-saga/effects'
import {LOGIN_REQUEST, LOGIN_SUCCESS} from "./types";

function* checkLogin() {
    yield put({type: LOGIN_SUCCESS, payload: {id:1, name: "Иван"}});
}

function* saga() {
    console.log("gg")
    yield takeEvery(LOGIN_REQUEST, checkLogin);
}

export  default saga