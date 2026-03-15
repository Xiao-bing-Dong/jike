import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: "user",
    initialState: {
        token: ''
    },
    reducers: {
        setToken:(state, action) =>{
            state.token = action.payload;
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