import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";
import Login from "../Pages/Login.js";
import SignUp from "../Pages/SignUp.js";
import Home from "../Pages/Home.js";
import PrivateRoute from "./PrivateRoute.js";
import ContactUs from "../Pages/ContactUs.js";
import Searching from "../Pages/Searching.js";
import DashboardLayout from "../Layout/DashboardLayout.js";
import DashboardHome from "../Pages/DashboardItems/DashboardHome.js";
import AllPosts from "../Pages/DashboardItems/AllPosts.js";
import Text from "../Pages/Text.js";
import Dashboard from "../Pages/Dashboard.js";
import DashboardPostCard from "../Pages/AllCards/DashboardPostCard.js";

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
                path: "/test",
                element: <Text />
            },
        ]
    },
    {
        path: '/dashboardLayout',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboardLayout',
                element: <DashboardHome />
            },
            {
                path: '/dashboardLayout/allPosts',
                element: <AllPosts />
            },
            {
                path: '/dashboardLayout/dashboard',
                element: <Dashboard />
            },
        ]
    },
]);

export default router;