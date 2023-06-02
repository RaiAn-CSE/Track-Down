import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/Login.js";
import SignUp from "../Pages/SignUp.js";
import Home from "../Pages/Home.js";
import Dashboard from "../Pages/Dashboard.js";
import PrivateRoute from "./PrivateRoute.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    },
]);

export default router;