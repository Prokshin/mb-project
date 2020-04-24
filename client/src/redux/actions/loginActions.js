import {LOGIN_REQUEST, LOGIN_SUCCESS} from "../types";

export const loginRequest = (email, password) => {
    return {type: LOGIN_REQUEST, payload: {email, password}}
}

export const loginSuccess = (id) =>{
    return {type: LOGIN_SUCCESS, payload: {id}}
}