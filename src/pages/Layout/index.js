import { request } from "@/utils";
import { useEffect } from "react";

const Layout = () => {

    //测试token是否成功注入axios
    useEffect(()=>{
        request.get('/user/profile');
    },[])

    return <div>this is Layout</div>
}

export default Layout;