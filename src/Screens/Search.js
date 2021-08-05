import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
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

    return (
        <ScrollView>
            <SearchTopBar navigation={navigation}/>
            {searchText.length >= 1 ? map(movies, (movie, index)=>(
                <Movie key={index} movie={movie}/>
            )): <Text style={styles.textContainer}>No movies to show</Text>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        fontSize: 30,
        textAlign: 'center',
    },
})

export default Search
