import { types } from '../types/types'

const initialState = {
    searchText: null,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.searchText:
                return {
                    ...state,
                    searchText: action.payload
                }
        default:
            return state;
    }
}