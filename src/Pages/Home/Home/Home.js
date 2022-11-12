import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Expectional from '../Expectional/Expectional';
import MakeAppoinment from '../MakeAppointment/MakeAppoinment';
import InfoCards from './InfoCards/InfoCards';

const Home = () => {
    return (
        <div className='mx-[21px]'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <Expectional></Expectional>
          <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;