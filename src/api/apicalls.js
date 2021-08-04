import { 
    API_MOVIE_HOST, 
    API_LOGIN_HOST, 
    API_KEY, 
    LANG 
} from "../utils/constants"

import React from "react"

export function getToken(data) {
    const url = `${API_LOGIN_HOST}`
    fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response => {
        return response.json()
    }))
    .then((result)=>{
        console.log(result);
        return result;
    })
}