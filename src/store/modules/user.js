import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken } from '@/utils';

const userStore = createSlice({
    name: "user",
    initialState: {
        token: getToken() || ''
    },
    reducers: {
        setToken:(state, action) =>{
            //将token存储在Redux中
            state.token = action.payload;
            //将token存储在本地
            _setToken(action.payload);
        }
    }
})

//结构出actionCreater
const { setToken } = userStore.actions;

//获取reducer对象
const userReducer = userStore.reducer;

//异步方法，完成登陆获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        //发送异步请求
        const res = await request.post('/authorizations', loginForm);
        //提交同步action进行token的存入
        dispatch(setToken(res.data.token));
    }
}

export { setToken, fetchLogin };

export default userReducer;