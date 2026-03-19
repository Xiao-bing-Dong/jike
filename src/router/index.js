import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import {createBrowserRouter} from 'react-router-dom';
import { AuthRoute } from '@/components/AuthRoute';
import Home from "@/pages/Home";
import Artical from "@/pages/Artical";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute><Layout /></AuthRoute>,
        children:[
            {
                path:'',
                element: <Home />
            },
            {
                path:'artical',
                element: <Artical />
            },
            {
                path:'publish',
                element: <Publish />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router;