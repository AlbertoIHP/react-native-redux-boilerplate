export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const userActions = {
    setUserLogged: (loggedUser) => {
        return {
            type: USER_LOGIN,
            payload: loggedUser
        }
    },
    setUserLoggedout: () => {
        return {
            type: USER_LOGOUT,
            payload: null
        }
    }
}
