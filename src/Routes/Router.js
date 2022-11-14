import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinments from "../Pages/Appoinments/Appoinments/Appoinments";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter(
    [
        {
            path : '/' , 
            element : <Main></Main> , 
            children : [
                {
                    path : '/' , 
                    element : <Home></Home> ,
                } , 
                {
                    path : '/login' , 
                    element : <Login></Login>
                } , 
                {
                    path : '/signup' , 
                    element : <SignUp></SignUp>
                }
                , 

                {
                    path : '/appoinments' , 
                    element : <Appoinments></Appoinments>
                }
            ]
        }
    ]
)