import base from './base';
import axios from '@/utils/axiosInstance';

let userManagerUrl = `${base.personalLibrary}/tag`;

const tag = {
    getTagList(params) {
        return axios.post(`${userManagerUrl}/getTagList`, {
            code: params
        })
    },
    createTag(title, parentNode, authorCode, isArticle) {
        return axios.post(`${userManagerUrl}/createTag`, {
            title: title,
            parentNode: parentNode,
            authorCode: authorCode,
            isArticle: isArticle
        })
    },
    deteleTag(tagId) {
        return axios.get(`${userManagerUrl}/deleteTag?tagId=${tagId}`)
    }
}

export default tag