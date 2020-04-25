import {USER_LOAD_SUCCESS} from "../types";


export const userReducer = (state = {id:null,name:null, img: null}, action) => {
    switch (action.type) {
        case USER_LOAD_SUCCESS:
            return action.payload
        default:
            return state
    }
}