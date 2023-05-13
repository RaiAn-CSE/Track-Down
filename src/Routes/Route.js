import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/Login.js";
import Post from "../Pages/Post.js";
import SignUp from "../Pages/SignUp.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
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