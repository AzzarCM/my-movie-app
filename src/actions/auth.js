import { types } from '../types/types'

export const setToken = ( token ) =>({
    type: types.setToken,
    payload: token
})

export const logout = () =>({
    type: types.logout,
})