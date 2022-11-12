import React from 'react';

const InfoCard = ({card}) => {
    const {title , description ,img , bgColor} = card;
    return (
        <div className={`card md:card-side  text-white  bg-base-100 shadow-xl py-[52px] px-[32px] ${bgColor} flex justify-between`}>
  <figure><img src={img} alt="Movie"/></figure>
  <div className="">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
   
  </div>
</div>
    );
};

export default InfoCard;