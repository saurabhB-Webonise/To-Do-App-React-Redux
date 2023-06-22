
import axios from 'axios';
import { DOMAIN } from '../constants/api-constants';

export const post = async (apiMethod, data) => {
    return (await axios({
        url: DOMAIN.concat(apiMethod),
        method: "POST",
        data: data,
        headers: {
            ContentType: 'application/json'
        },
    })).data
}

export const get = async (apiMethod) => {
    return (await axios.get(DOMAIN.concat(apiMethod))).data
}

export const fetchGet = async (apimethod) => {
    return (await fetch(DOMAIN.concat(apimethod), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })).json();
}

export const fetchPost = async (apimethod,body)=>{
    return (await fetch(DOMAIN.concat(apimethod), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })).json()
}
