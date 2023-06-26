import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/Login.js";
import SignUp from "../Pages/SignUp.js";
import Home from "../Pages/Home.js";
import Dashboard from "../Pages/Dashboard.js";
import PrivateRoute from "./PrivateRoute.js";
import ContactUs from "../Pages/ContactUs.js";
import Searching from "../Pages/Searching.js";
import ImageComparison from "../Pages/ImageComparison.js";

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
            },
            {
                path: "/contactUs",
                element: <ContactUs />
            },
            {
                path: "/searching",
                element: <Searching />
            },
            {
                path: "/imageComparison",
                element: <ImageComparison />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    },
]);

export default router;