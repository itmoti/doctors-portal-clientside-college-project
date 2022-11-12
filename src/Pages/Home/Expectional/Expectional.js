import React from 'react';
import treatement from '../../../assets/images/treatment.png'

const Expectional = () => {
    return (
        <div className="mt-16  mx-auto md:w-3/4  bg-base-100 flex md:flex-row flex-col  items-center ">
        <figure className='md:w-2/4 h-1/4'><img src={treatement} alt="Album"/></figure>
        <div className="card-body md:w-2/4">
          <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable .</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Expectional;