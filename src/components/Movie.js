import React from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import {BASE_PATH_IMG} from '../utils/constants'
import { Text, Title, Button } from "react-native-paper"
import {Rating} from 'react-native-ratings'
import starLight from '../assets/img/starLight.png'
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
                <Title>{title}</Title>
                <Text>{release_date}</Text>
                <Text>{overview}</Text>
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
        <View>
            <Rating
                type="custom"
                ratingImage={starLight}
                ratingColor="#ffc205"
                ratingBackgroundColor="#f0f0f0"
                startingValue={media}
                imageSize={20}
                style={{marginRight: 15}}
            />
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
        width: 100,
        height: 150,
    },
    loadMoreContainer:{
        paddingTop: 10,
        paddingBottom: 20,
    },
    loadMore:{
        backgroundColor: "transparent"
    }   
})

export default Movie
