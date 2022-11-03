import * as types from "./ActionType";
 
export const registerStart=()=>({
    type: types.REGISTER_START
})
export const registerSuccess=(data)=>({
    type: types.REGISTER_SUCCESS,
    payload: data
})
export const registerError=(error)=>({
    type: types.REGISTER_ERROR,
    payload:error
})

export const loginStart=()=>({
    type: types.LOGIN_START
})
export const loginSuccess=(user)=>({
    type: types.LOGIN_SUCCESS,
    payload: user
})
export const loginError=(error)=>({
    type: types.LOGOUT_ERROR,
    payload:error
})

export const logoutStart=()=>({
    type: types.LOGOUT_START
})
export const logoutSuccess=(data)=>({
    type: types.LOGIN_SUCCESS,
    payload: data
})
export const logoutError=(data)=>({
    type: types.LOGOUT_ERROR,
    payload:error
})