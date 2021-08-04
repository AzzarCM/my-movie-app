import { types } from '../types/types'

const initialState = {
    token: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setToken:
                return {
                    ...state,
                    token: action.payload
                }
        case types.logout:
                return{
                    ...state,
                    token: '',
                }
        default:
            return state;
    }
}