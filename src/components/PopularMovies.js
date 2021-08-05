import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView,
}
    from 'react-native'
import { getPopularMoviesApi } from '../api/movies'
import Carousel from 'react-native-snap-carousel';
import { BASE_PATH_IMG } from '../utils/constants'
import { Button } from 'react-native-paper';
import { map } from 'lodash'
import Movie from './Movie'

const { width } = Dimensions.get('window')

const ITEM_WIDTH = Math.round(width * 0.7);

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
                        setShowBtnMore(false);
                    } else {
                        setMovies([...movies, ...res.results]);
                        setShowBtnMore(false);
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

            {/* {showBtnMore && (
                <Button
                    mode="contained"
                    contentStyle={styles.loadMoreContainer}
                    style={styles.loadMore}
                    labelStyle={{ color: "#000" }}
                    onPress={() => setPage(page + 1)}
                >
                    Cargar Mas...
                </Button>
            )} */}
        </ScrollView>
    )
}

function RenderItem(props) {
    const { data } = props;
    const { item } = data;

    const {
        poster_path
    } = item;

    const imageUrl = `${BASE_PATH_IMG}/w500/${poster_path}`

    return (
        <TouchableWithoutFeedback>
            <View>
                <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
        </TouchableWithoutFeedback>
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
        backgroundColor: "transparent"
    }
})


export default PopularMovies
