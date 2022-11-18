import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appoinments from "../Pages/Appoinments/Appoinments/Appoinments";
import AppoinmentsCopy from "../Pages/AppoinmentsCopy/Appoinments/Appoinments";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyAppoinments from "../Pages/Dashboard/MyAppoinemts/MyAppoinments";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRouter from "./AdminRouter";
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
            element:<PrivateRouter><DashboardLayout></DashboardLayout> </PrivateRouter>, 
            children : [
                {
                    path : '/dashboard' , 
                    element :  <MyAppoinments></MyAppoinments>
                } , 
                {
                    path : '/dashboard/users' , 
                    element : <AdminRouter><AllUsers></AllUsers></AdminRouter>
                } , 
                {
                    path : '/dashboard/adddoctor' , 
                    element : <AdminRouter><AddDoctor></AddDoctor></AdminRouter>
                }
            ]
        }
    ]
)