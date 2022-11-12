import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <section >
            <footer style={{backgroundImage : `url(${footer})` , backgroundSize : 'cover' ,backgroundPosition : 'center' ,backgroundAttachment : 'fixed' }} className="footer p-10 bg-white text-[#3A4256] grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 text-center">
     
         <div>
         <span className="footer-title">Services</span> 
          <Link to={'/'} className="link link-hover">Branding</Link>
          <Link to={'/'} className="link link-hover">Design</Link>
          <Link to={'/'} className="link link-hover">Marketing</Link>
          <Link to={'/'} className="link link-hover">Advertisement</Link>
         </div>
      
        <div>
          <span className="footer-title">Company</span> 
          <Link to={'/'} className="link link-hover">About us</Link>
          <Link to={'/'} className="link link-hover">Contact</Link>
          <Link to={'/'} className="link link-hover">Jobs</Link>
          <Link to={'/'} className="link link-hover">Press kit</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link to={'/'} className="link link-hover">Terms of use</Link>
          <Link to={'/'} className="link link-hover">Privacy policy</Link>
          <Link to={'/'} className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className='text-center mt-7'>
        <p>Copyright 2022 All Right Reserved</p>
      </div>
        </section>
    );
};

export default Footer;