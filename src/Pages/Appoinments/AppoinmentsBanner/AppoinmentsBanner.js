import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppoinmentsBanner = ({ date }) => {
    const {selectedNewDate , setSelectedNewDate }  = date
   
    return (
        // <div style={{background : `url(${chair}) ` , opacity : '0.9'}}  className="hero  ">
        <div className='hero'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl lg:max-w-sm " alt='' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={selectedNewDate}
                        onSelect={setSelectedNewDate}

                    ></DayPicker>
                    <p>You have selected {format(selectedNewDate, 'PP')}</p>

                </div>
            </div>
        </div>
    );
};

export default AppoinmentsBanner;