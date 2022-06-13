import * as axios from 'axios';

const baseApi = 'https://192.168.1.100:5443';

export const getCards = () => {
    return axios.get(baseApi).then(res=> res.data)
}