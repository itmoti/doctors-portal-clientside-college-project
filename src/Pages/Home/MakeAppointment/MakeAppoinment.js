import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import { Link } from 'react-router-dom';

const MakeAppoinment = () => {
    return (
        <div style={{backgroundImage : `url(${appointment})`}} 
        className=" text-white mx-[-20px] mt-[200px] flex md:flex-row flex-col  items-center bg-accent ">
        <figure className='md:w-2/4 lg:block hidden h-1/4'><img className='-mt-[200px]' src={doctor} alt="Album"/></figure>
        <div className="card-body md:w-2/4 font-4xl">
            <h2 className='card-title text-primary'>Appoinment</h2>
          <h2 className="card-title">Make an appointment Today</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web .</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary"><Link to={'/appointments'}>Get Started</Link></button>
          </div>
        </div>
      </div>
    );
};

export default MakeAppoinment;