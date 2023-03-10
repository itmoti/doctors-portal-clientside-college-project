import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  { UserContext } from '../../../Context/AuthContext';

const Nav = () => {
  const {user , logOut} = useContext(UserContext)
  const handleLogout = () => {
    logOut()
    .then(() => {})
     .catch(err => console.log(err))
  } 
  const [togleBtn , setTogglebtn] = useState(true)
  if(!togleBtn) {
    document.documentElement.setAttribute("data-theme" , "dark")
  }
  else {
    document.documentElement.setAttribute("data-theme" , "doctortheme")

  }

  console.log(togleBtn)
    const navLink = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appoinments'>Appoinments</Link></li>
     
      <li><Link to='/contactus'>Contact Us</Link></li>
  
     {user?.uid ?<>
      <li><Link to='/dashboard'>Dashboard</Link></li>
     
     <li><button onClick={handleLogout}>Logout</button></li> </> : <> <li><Link to='/login'>Login</Link></li>
      <li><Link to='/signup'>Signup</Link></li></>}
     <li><p>Light</p>  <input type="checkbox" className="toggle mx-2 my-auto" onClick={() => setTogglebtn(!togleBtn)}  /> <p>Dark</p></li>
    </>
    return (
        <div className="navbar bg-base-100">
          
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           
           {navLink}
          </ul>
        </div>
        
        <label  htmlFor="dashboardDrawer" tabIndex={1} className="btn btn-ghost mr-0 navbar-end lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div>
    );
};

export default Nav;