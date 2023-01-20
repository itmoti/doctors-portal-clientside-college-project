import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';
import UseToken from '../../Hooks/UseToken';

const Login = () => {
    const {signIn , passwordReset,googleSignIn} = useContext(UserContext)
    const { register, formState: { errors }, handleSubmit   , getValues } = useForm();
    const [loginError , setLoginError] = useState('');
    const [loginUserEmail , setLoginUserEmail] = useState('')
    const [token] = UseToken(loginUserEmail)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathName || '/';
    if(token) {
        navigate(from , {replace : true})
    }

    const handleLogin = data => {
        setLoginError('')
        console.log(data.email , data.password)
        signIn( data.email , data.password)
        .then(result=> {
            setLoginUserEmail(data.email)
            console.log(result)
       
        })
        .catch(err => {
            console.log(err)
            setLoginError(err.message)
        })

   
     
    }
   
    
    const handlePasswordChange = () => {
        const email = getValues("email")
        passwordReset(email) 
        .then(() => {})
        .catch(err => console.log(err))
      
    }
  const   handleGoogleSignIn = () => {
    setLoginError('')
    googleSignIn();
  }
    return (
        <div className=' h-[auto] flex justify-center items-center text-center '>
            <div className='w-96 p-7'>
                <h2 className='font-bold text-center text-2xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input 
                        {...register("email" , {required : "Email Address is required" }) }
                         className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                          
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input
                       {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                    })}

                          className="input input-bordered w-full max-w-xs" />
                           {errors.Password && <p className='text-error'>{errors.Password?.message}</p>}
                        <label onClick={handlePasswordChange} className=" label label-text-alt">
                            Forget Password? </label>
                    </div>
                    <input className="btn btn-active mx-auto btn-wide" value={'Login'} type="submit" />
                    {loginError && <p className='text-error'>{loginError}</p>}
                </form>
                <p>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-accent w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;