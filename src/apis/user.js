//用户相关的所有请求
import { request } from '@/utils/request';
//1.登录请求
export const loginAPI = (formData) => {
    //axios中通用的写法
    return request({
        url: '/authorizations',
        method: 'POST',
        data: formData
    })
}

//2.获取用户信息
export const getProfileAPI = () => {
    //axios中通用的写法
    return request({
        url: '/user/profile',
        method: 'GET'
    })
}