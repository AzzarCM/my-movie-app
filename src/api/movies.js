import {
    API_MOVIE_HOST,
    API_LOGIN_HOST,
    API_KEY,
    LANG
} from "../utils/constants"

export function getPopularMoviesApi(page = 1) {
    const url = `${API_MOVIE_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`
    return fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        return result;
    })
}

export function searchMovieApi(search) {
    const url = `${API_MOVIE_HOST}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${search}`
    return fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        return result;
    })
}