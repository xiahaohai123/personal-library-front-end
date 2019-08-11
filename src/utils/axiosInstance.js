import axios from 'axios';
import router from '@/router'

const instance = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        // "Access-Token": localStorage.getItem('token')
        "Access-Token": localStorage.getItem('token')
    }
});

// 请求拦截器
// instance.interceptors.request.use(
//     response => {
//         console.log(response)
//         return response
//     },

//     error => {
//         console.log("触发error")
//         console.log(error)
//         return Promise.reject(error)
//     })

// 响应拦截器
instance.interceptors.response.use(
    response => {
        // console.log(response.data)
        return response
    },
    error => {
        // console.log(error.response)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('token')
                    localStorage.setItem('isLogin', false)
                    router.replace('/')
            }
        }
        return Promise.reject(error)
    }
)

// instance.defaults.headers.common['token'] = store.state.token

export default instance;