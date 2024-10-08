import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/Error-page";
import UserLiked from "../pages/UserLiked";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path:'/home',
        element:<Home />,
    },
    {
        path:'/profile',
        element:<Profile />,
    },
    ,
    {
        path:'/login',
        element:<Login />,
    },
    ,
    {
        path:'/register',
        element:<Register />,
    },
    ,
    {
        path:'/likedpage',
        element:<UserLiked />,
    },
    

])
export default router;