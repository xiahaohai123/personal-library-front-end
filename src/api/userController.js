
import base from './base';
import axios from '@/utils/axiosInstance';

let userManagerUrl = `${base.personalLibrary}/user`;

const user = {

    start() {
        return axios.get(`${base.personalLibrary}/user/start`);
    },
    login(params) {
        return axios.post(`${userManagerUrl}/login`, params)
    },
    loginCheck(params) {
        return axios.post(`${userManagerUrl}/loginCheck`, {
            'Access-Token': params
        })
    }
}

export default user;