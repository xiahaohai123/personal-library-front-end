import base from './base'
import axios from '@/utils/axiosInstance'


let userManagerUrl = `${base.personalLibrary}/article`

const article = {
    getArticleList(params) {
        return axios.post(`${userManagerUrl}/getArticleList`, params)
    },
    getArticleList() {
        return axios.post(`${userManagerUrl}/getArticleList`)
    },
    getArticle(userCode, tagId) {
        return axios.get(`${userManagerUrl}/getArticle?userCode=${userCode}&tagId=${tagId}`)
    },
    getPublicArticle(userCode, tagId) {
        return axios.get(`${userManagerUrl}/getPublicArticle?userCode=${userCode}&tagId=${tagId}`)
    },
    saveArticle(userCode, tagId, contentMD) {
        return axios.post(`${userManagerUrl}/saveArticle`, {
            userCode: userCode,
            tagId: tagId,
            contentMD: contentMD
        })
    },
    imgAdd(tagId, formdata) {
        return axios.post(`${userManagerUrl}/addImage?tagId=${tagId}`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
                // "Access-Token": localStorage.getItem('token')
                "Access-Token": localStorage.getItem('token')
            }
        })
    },
    imgDelete(route) {
        return axios.post(`${userManagerUrl}/deleteImage`, {
            route: route
        })
    },
    createArticle(title, parentNodeId, userCode) {
        return axios.post(`${userManagerUrl}/createArticle`, {
            title: title,
            parentNodeId: parentNodeId,
            userCode: userCode
        })
    }
}

export default article