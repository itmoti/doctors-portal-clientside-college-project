import React from 'react';
import TestiMonial from '../TestiMonial/TestiMonial';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'

const TestiMonials = () => {
    const testimonials = [
        {
            id : 1,
            img : people1,
            description : " It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content " ,
            name : 'Winson Henry' ,
            location : 'California'
           
        } ,
        {
            id : 2,
            img : people2,
            description : " It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content " ,
            name : 'Winson Henry' ,
            location : 'California'
           
        } ,
        {
            id : 3,
            img : people3,
            description : " It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content " ,
            name : 'Winson Henry' ,
            location : 'California'
           
        } ,
    ]
    return (
        <div>
            <div className=' mt-20 flex justify-between'>
               <div>
               <h1 className='text-2xl text-primary'>Testimonial</h1>
                <p className='text-3xl font-bold'>What Our Patients Says</p>
               </div>
               <figure><img  className='w-32' src={quote} alt='Queote'/></figure>
            </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14'>
         {
                testimonials.map (testimonial => <TestiMonial key={testimonial.id} testimonial ={testimonial}></TestiMonial>)
            }
         </div>
        </div>
    );
};

export default TestiMonials;