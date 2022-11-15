import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';

const SignUp = () => {
    const {signup , updateFullProfile} = useContext(UserContext)
 
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSignUp = data => {
        console.log(data.email , data.password)
        console.log(errors)
    
        signup(data.email , data.password) 
     
        .then(result => {
            console.log(result)
            const userInfo = {
                displayName : data.name 
               }
            updateFullProfile(userInfo) 
            toast("User Created Succesfully")
        })
        .catch(err => console.log(err))
    }
    console.log(errors)
    return (
        <div className=' h-[800px] flex justify-center items-center text-center '>
            <div className='w-96 p-7'>
                <h2 className='font-bold text-center text-2xl'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}
                
                >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: "Name Missing"
                            })}
                        />
                        {errors.name && <p className='text-error'>Name Missing</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: "Email Missing"
                            })} />
                        {errors.email && <p className='text-error'>Email Missing</p>} </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input className="input input-bordered w-full max-w-xs"
                         {...register("password", {
                            required: 'Password is required', 
                            minLength : {value : 6 , message : 'Please make pass long 6 digits'} , 
                          
                            pattern : { 
                                // value : /"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]) "/ , 
                                value : /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ ,
                                message : "Password must contain uppercase and number"
                            }
                        })}
                        />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}

                    </div>
                    <input className="btn btn-active mx-auto btn-wide mt-3" value={'Submit'} type="submit" />
                </form>
                <p>Already Have an Account? <Link className='text-secondary' to={'/Login'}>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-accent w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default SignUp;