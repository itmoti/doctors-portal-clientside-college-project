import React from 'react';

const Service = ({service}) => {
    const {img,title,description} = service
    return (
        <div className='py-9 px-14 text-center shadow-xl'>
            <div className='flex justify-center'>
                <figure className='px-auto pt-10'><img src={img} alt="Loading" /></figure>
            </div>
            <div className="text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    </div>
        </div>
    );
};

export default Service;