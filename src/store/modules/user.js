import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken } from '@/utils';

const userStore = createSlice({
    name: "user",
    initialState: {
        token: getToken() || '',
        userInfo:{}
    },
    reducers: {
        setToken:(state, action) =>{
            //将token存储在Redux中
            state.token = action.payload;
            //将token存储在本地
            _setToken(action.payload);
        },
        setUserInfo:(state,action)=>{
            state.userInfo=action.payload;
        }
    }
})

//结构出actionCreater
const { setToken,setUserInfo } = userStore.actions;

//获取reducer对象
const userReducer = userStore.reducer;

//获取token异步方法
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        //发送异步请求
        const res = await request.post('/authorizations', loginForm);
        //提交同步action进行token的存入
        dispatch(setToken(res.data.token));
    }
}


//获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.get('/user/profile');
        dispatch(setUserInfo(res.data)); 
    }
}

export { setToken, fetchLogin,fetchUserInfo };

export default userReducer;