import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)
const Payment = () => {
    const navigation = useNavigation
    const bookings = useLoaderData()
if(navigation.state === 'loading') {
    return <Loader></Loader>
}
    console.log(bookings)
    return (
        <div>
            <h3 className="text-3xl">Payment for {bookings.treatment}</h3>
            <p className="text-xl">Please pay $<span className='font-bold'>{bookings.price}</span> for appoiment on {bookings.appointmentDate} at {bookings.slot}</p>

            <div className='w-96 my-7'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        bookings={bookings}
                    >

                    </CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;