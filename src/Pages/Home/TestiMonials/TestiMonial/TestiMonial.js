import React from 'react';

const TestiMonial = ({testimonial}) => {
    const {img,description , name , location} =  testimonial;
    return (
        <div className="card p-9 bg-base-100 shadow-xl">
        <div className="mb-3">
          <p>{description}</p>
        </div>
        <div className='flex items-center'>
        <figure><img className='border-4 rounded-full border-primary outline-8  w-16 ' src={img} alt="People" /></figure>
        <div className='ml-2'>
        <h2 className="card-title">{name}</h2>

            <p>{location}</p>
        </div>
        </div>
      </div>
    );
};

export default TestiMonial;