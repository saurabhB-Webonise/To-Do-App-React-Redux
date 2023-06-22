
import axios from 'axios';
import { DOMAIN, ALL_USERS } from '../constants/api-constants';

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

export const fetchGet = async () => {
    return (await fetch(DOMAIN.concat(ALL_USERS), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })).json();
}
