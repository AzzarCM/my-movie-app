import { types } from '../types/types'
import { API_LOGIN_HOST } from '../utils/constants'

export const setToken = ( token ) =>({
    type: types.setToken,
    payload: token
})

export const logout = () =>({
    type: types.logout,
})