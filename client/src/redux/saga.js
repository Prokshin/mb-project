import { put, takeEvery } from 'redux-saga/effects'
import {LOGIN_REQUEST, LOGIN_SUCCESS, USER_LOAD_SUCCESS, USER_REQUEST} from "./types";
import UserAPI from "../API/UserAPI";

function* checkLogin() {
    yield put({type: LOGIN_SUCCESS, payload: {id:1}});
}

function* loadUser(action) {
    try {
        if(action.payload.userId) {
            const userAPI = new UserAPI();
            const data = yield userAPI.getUser(action.payload.userId).then(res => res)
            console.log(action.payload.userId)
            yield put({type: USER_LOAD_SUCCESS, payload: data});
        }
    }
    catch (e) {
        console.error("gg")
    }
}

function* saga() {
    console.log("gg")
    yield takeEvery(LOGIN_REQUEST, checkLogin);
    yield takeEvery(USER_REQUEST,loadUser)
}

export  default saga