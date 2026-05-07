import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Page/Home";
import CategoryNews from "../components/Page/CategoryNews";
import Login from "../components/Page/Login";
import Register from "../components/Page/Register";
import AuthLayout from "../Layout/AuthLayout";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                  {
                    path:"/category/:id",
                    element:<CategoryNews></CategoryNews>,
                    loader: ()=> fetch("/news.json")
                }
            ]
        },

        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path: "/auth/register",
                    element:<Register></Register>
                }
            ]
        },
        {
        path: "/news",
        element: <h2>News Layout</h2>,
        },
        {
            path:"/*",
            element:<h2>404 Not Found</h2>,
        }
    ]);

export default router;