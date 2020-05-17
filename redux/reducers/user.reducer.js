/* eslint-disable no-case-declarations */
import { USER_LOGIN, USER_LOGOUT } from '../actions/user.actions'

/**
 * Reducer function means a switch case to filter action data on the platform for general state
 * @param {*} state Real time updated through all components state (general state flux)
 * @param {*} action Action is an object with structyure { type: STRING, payload: FUNCTION }
 */
function userReducer (state = { isUserLogged: false, user: null }, action) {
    switch (action.type) {
    case USER_LOGIN:
        return {
            ...state,
            isUserLogged: true,
            user: action.payload
        }
    case USER_LOGOUT:
        return {
            ...state,
            isUserLogged: false,
            user: null
        }
    default:
        return state
    }
}

export default userReducer
