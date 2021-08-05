import React from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import {BASE_PATH_IMG} from '../utils/constants'
import { Text, Title, Button } from "react-native-paper"
import {Rating} from 'react-native-ratings'
import starLight from '../assets/img/starLight.png'
import defaultImage from '../assets/img/default-imgage.png'
const Movie = (props) => {
    const { movie } = props;
    const {
        poster_path, 
        title, 
        release_date,
        vote_count,
        vote_average,
        overview,
    } = movie;

    return (
        <TouchableWithoutFeedback>
        <View style={styles.movie}>
            <View style={styles.left}>
                <Image 
                    style={styles.image}
                    source={poster_path ? { uri: `${BASE_PATH_IMG}/w500${poster_path}`} : {defaultImage}}
                    />
            </View>
            <View style={styles.right}>
                <Title style={{width: 250}}>{title}</Title>
                <Text>{release_date}</Text>
                <Text numberOfLines={5} style={{width: 250}}>{overview}</Text>
                <MovieRating vote_count={vote_count} vote_average={vote_average}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

function MovieRating(props) {
    const {vote_average, vote_count} = props
    const media = vote_average/2;
    return(
        <View style={styles.ratingContainer}>
            <View style={styles.topContainer}>
                <Rating
                    type="custom"
                    ratingImage={starLight}
                    ratingColor="#ffc205"
                    ratingBackgroundColor="#f0f0f0"
                    startingValue={media}
                    imageSize={20}
                />
                <Text style={{marginLeft: 10}}>{media}</Text>
            </View>
            <Text style={{fontSize: 12, color: "#8697a5", marginTop: 5}}>
                {vote_count} votos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    movie:{
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    left:{
        marginRight: 20,

    },
    viewRating:{
        alignItems:"flex-start",
        justifyContent: "flex-start",
        marginTop: 10,
    },
    image:{
        width: 130,
        height: 200,
        borderRadius: 10,
        marginLeft: 10,
    },
    loadMoreContainer:{
        paddingTop: 10,
        paddingBottom: 20,
    },
    loadMore:{
        backgroundColor: "transparent"
    },
    ratingContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10,
    }, 
    topContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }  
})

export default Movie
