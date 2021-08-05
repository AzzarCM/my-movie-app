import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchText } from '../actions/ui'

const SearchTopBar = ({ navigation }) => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query)
    const {searchText} = useSelector(state => state.ui)
    useEffect(() => {
        dispatch(changeSearchText(searchQuery))
    }, [searchQuery])

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            defaultValue={searchText}
            onIconPress={()=> navigation.navigate('search')}
        />
    )
}

export default SearchTopBar
