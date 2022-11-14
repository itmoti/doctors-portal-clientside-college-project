import { format } from 'date-fns';
import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton';

const Modal = ({ treatment, selectedNewDate , setTreatment }) => {
    const { name, slots } = treatment; // treatment is appoinments option with different name
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value; 
        const name = form.name.value;
        const slot = form.slots.value;
        const number = form.number.value;
        const email = form.email.value;
       const booking = {
        appointmentDate: date,
        treatment: name,
        patient: name,
        slot,
        email,
        number,
       }
       console.log(booking)
          // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
       setTreatment(null)

    }
    return (
        <>



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleFormSubmit}>
                        <h3 className="text-lg font-bold mb-5">{name}</h3>
                        <input type="text" name='date' value={`${format(selectedNewDate, 'PP')}`} className="input input-bordered w-full max-w-xs mb-3" disabled />

                        <select name='slots'  className="select select-bordered w-full max-w-xs mb-3">

                            {slots.map((slot,i) => <option 
                            key={i}
                            value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-3" />
                        <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-3" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs mb-3" />
                        <br />
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;