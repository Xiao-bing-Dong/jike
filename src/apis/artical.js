//封装文章相关的接口
import { request } from '@/utils/request';
//1.获取频道列表
export const getChannelAPI = () => {
    //axios中通用的写法
    return request({
        url: '/channels',
        method: 'GET',
    })
}
//2.提交文章表单
export const createArticleAPI=(data)=>{
    return request({
        url:'/mp/articles?draft=false',
        method:'POST',
        data
    })
}