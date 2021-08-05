import { types } from '../types/types'

export const changeSearchText = ( text ) =>({
    type: types.searchText,
    payload: text
})