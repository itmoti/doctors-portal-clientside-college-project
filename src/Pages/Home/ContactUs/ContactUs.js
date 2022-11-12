import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton';
const ContactUs = () => {
    return (
       <section style={{backgroundImage : `url(${appoinment})`}} className='-mx-5'>
         <div className='text-center mt-20 py-16 w-[440px] mx-auto'>
          
          <h1 className='text-2xl font-bold text-primary'>Contact Us</h1>
          <p className='text-white text-3xl mb-7'>Stay Connected With Us</p>
         <div className=''>
         <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs mb-3" />
          <input type="text" placeholder="Subject" className="input input-bordered w-full mb-3 max-w-xs" />
          <input type="text" placeholder="Your Message" className="input input-bordered w-full max-w-xs mb-7 h-28" />
         </div>

          <PrimaryButton>Submit</PrimaryButton>
  </div>
       </section>
    );
};

export default ContactUs;