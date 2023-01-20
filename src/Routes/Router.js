import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appoinments from "../Pages/Appoinments/Appoinments/Appoinments";
import AppoinmentsCopy from "../Pages/AppoinmentsCopy/Appoinments/Appoinments";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Bookings from "../Pages/Dashboard/Bookings/Bookings";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppoinments from "../Pages/Dashboard/MyAppoinemts/MyAppoinments";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRouter from "./AdminRouter";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement : <DisplayError></DisplayError> ,

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
                },
                {
                    path: '/about'
                    , element: <About></About>
                },
                {
                    path: '/contactus'
                    , element: <ContactUs></ContactUs>
                }
            ]
        },
        {
            path: '/dashboard',
            element:<PrivateRouter><DashboardLayout></DashboardLayout> </PrivateRouter>, 
            errorElement : <DisplayError></DisplayError> ,
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
                } , 
                {
                    path : '/dashboard/managedoctors' , 
                    element : <AdminRouter><ManageDoctors></ManageDoctors></AdminRouter>
                } , 
                {
                    path : '/dashboard/allBookings' , 
                    element : <AdminRouter><Bookings></Bookings></AdminRouter>
                } , 
                {
                    path : '/dashboard/payment/:id' , 
                    loader : ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),
                    element : <PrivateRouter><Payment></Payment></PrivateRouter>
                } , 
            ]
        }
    ]
)