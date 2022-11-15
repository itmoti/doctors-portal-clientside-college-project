import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinments from "../Pages/Appoinments/Appoinments/Appoinments";
import AppoinmentsCopy from "../Pages/AppoinmentsCopy/Appoinments/Appoinments";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                }
                ,

                {
                    path: '/appoinments',
                    element: <Appoinments></Appoinments>
                },
                {
                    path: '/appointmentsCopy'
                    , element: <AppoinmentsCopy></AppoinmentsCopy>
                }
            ]
        },
        {
            path: '/dashboard',
            element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
        }
    ]
)