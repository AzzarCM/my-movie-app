import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { searchMovieApi } from '../api/movies'
import SearchTopBar from '../components/SearchTopBar';
import { useSelector } from 'react-redux';
import { map } from 'lodash'
import Movie from '../components/Movie'

const Search = ({ navigation }) => {

    const [movies, setMovies] = useState(null);
    const {searchText} = useSelector(state => state.ui)

    useEffect(() => {
       searchMovieApi(searchText).then((response)=>{
           setMovies(response.results);
       })
    }, [searchText])

    console.log(movies);
    
    return (
        <ScrollView>
            <SearchTopBar navigation={navigation}/>
            <Text>{searchText}</Text>
            {searchText.length >= 1 ? map(movies, (movie, index)=>(
                <Movie key={index} movie={movie}/>
            )): <Text>No</Text>}
        </ScrollView>
    )
}

export default Search
