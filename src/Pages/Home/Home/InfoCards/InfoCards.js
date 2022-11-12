import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';

const InfoCards = () => {
    const cardInfo = [
        {
            id : 1,
            title : 'Opening Hours' , 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, assumenda!" ,
            img : clock ,
            bgColor : 'bg-gradient-to-r from-primary to-secondary '
        } ,
        {
            id : 2,
            title : 'Visit Our Location' , 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, assumenda!" ,
            img : marker ,
            bgColor : 'bg-accent'
        } ,
        {
            id : 3,
            title : 'Contact Us' , 
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, assumenda!" ,
            img : phone ,
            bgColor : 'bg-gradient-to-r from-primary to-secondary '
        } ,
    ]
    return (
        <div className='grid gap-6 mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardInfo.map (card => <InfoCard key={card.id} card = {card}></InfoCard>)
            }
           
        </div>
    );
};

export default InfoCards;