import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Expectional from '../Expectional/Expectional';
import MakeAppoinment from '../MakeAppointment/MakeAppoinment';
import TestiMonials from '../TestiMonials/TestiMonials/TestiMonials';
import InfoCards from './InfoCards/InfoCards';

const Home = () => {
    return (
        <div className='mx-[21px]'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <Expectional></Expectional>
          <MakeAppoinment></MakeAppoinment>
          <TestiMonials></TestiMonials>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;