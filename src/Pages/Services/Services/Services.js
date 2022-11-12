import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            id : 1,
            title : 'Fluoride Treatment' , 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima?" ,
            img : fluoride
        } ,
        {
            id : 2,
            title : 'Cavity Filling' , 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima?" ,
            img : cavity
        } ,
        {
            id : 3,
            title : 'Teeth Whitening' , 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima?" ,
            img : whitening
        } ,
    ]
    return (
        <div className=' mt-8  gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
           {services.map(service => <Service key={service.id} service = {service}></Service>)}
        </div>
    );
};

export default Services;