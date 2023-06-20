
import axios from 'axios';
import { LOGIN, DOMAIN } from '../constants/api-constants';

export const post = async (apiMethod, data) => {
    const response = await axios({
        url: DOMAIN.concat(apiMethod),
        method: "POST",
        data: data,
        headers: {
            ContentType: 'application/json'
        },
    });
    return response.data;
}

export const get = async (apiMethod) => {
    const response = await axios.get(DOMAIN.concat(apiMethod));
    return response.data;
}
