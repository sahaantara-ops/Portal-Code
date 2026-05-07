import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Page/Home";
import CategoryNews from "../components/Page/CategoryNews";

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
            element: <h2>AuthenticationLayout</h2>,
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