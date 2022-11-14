import React, { useState } from 'react';
import AppoinmentsBanner from '../AppoinmentsBanner/AppoinmentsBanner';
import AvailableAppoinmets from '../AvailableAppoinmets/AvailableAppoinmets';
import Modal from '../Modal/Modal';

const Appoinments = () => {
    const [selectedNewDate , setSelectedNewDate] = useState(new Date())
    const date = {selectedNewDate , setSelectedNewDate}
    return (
        <div>
           <AppoinmentsBanner date = {date}></AppoinmentsBanner>
           <AvailableAppoinmets selectedNewDate = {selectedNewDate}></AvailableAppoinmets>
          

        </div>
    );
};

export default Appoinments;