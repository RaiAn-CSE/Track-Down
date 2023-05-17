import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/Login.js";
import Post from "../Pages/Post.js";
import SignUp from "../Pages/SignUp.js";
import Home from "../Pages/Home/Home.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/post",
                element: <Post />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    },
]);

export default router;