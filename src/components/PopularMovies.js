import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    ScrollView,
}
    from 'react-native'
import { getPopularMoviesApi } from '../api/movies'
import { Button } from 'react-native-paper';
import { map } from 'lodash'
import Movie from './Movie'

const PopularMovies = () => {

    const [movies, setMovies] = useState(null);
    const [showBtnMore, setShowBtnMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPopularMoviesApi(page)
            .then((res) => {
                const totalPages = res.total_pages;
                if (page < totalPages) {
                    if (!movies) {
                        setMovies(res.results)
                    } else {
                        setMovies([...movies, ...res.results]); 
                    }
                } else {
                    setShowBtnMore(false);
                }
            })
    }, [page])

    return (
        <ScrollView>
            {map(movies, (movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
            {showBtnMore && (
                <Button
                    mode="contained"
                    contentStyle={styles.loadMoreContainer}
                    style={styles.loadMore}
                    labelStyle={{ color: "#fff" }}
                    onPress={() => setPage(page + 1)}
                >
                    Load more ...
                </Button>
            )} 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 450,
        borderRadius: 20,
    },
    loadMoreContainer: {
        paddingTop: 10,
        paddingBottom: 20,
    },
    loadMore: {
        backgroundColor: "#1e3040",
        marginBottom: 140,
    }
})


export default PopularMovies
