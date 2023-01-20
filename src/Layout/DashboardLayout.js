import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';
import useAdmin from '../Hooks/useAdmin';
import Nav from '../Pages/Shared/Nav/Nav';
const DashboardLayout = () => {
  const {user} = useContext(UserContext)
  const [isAdmin] = useAdmin(user.email)
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
  <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  <Outlet></Outlet>
  
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboardDrawer" className="drawer-overlay "></label> 
    <ul className="menu p-4 w-80  text-base-content">

      <li><Link to='/dashboard'>Dashboard</Link></li>
     
     {
      isAdmin &&  <>
      <li><Link to='/dashboard/users'>All Users</Link></li>
      <li><Link to='/dashboard/allBookings'>Bookings</Link></li>
      <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
      <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
      
      </>
     }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;