import React from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            
            <h3 className='title mt-3'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' id='' placeholder='Your Name' />

                <input type='email' name='email' id='' placeholder='Your Email' required />

                <input type='password' name='password' id='' placeholder='Enter password' required />
                <input className='bg-info text-white p-1 d-block mx-auto w-50' type="submit" value='Sign Up' />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pt-2 pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
        
    );
};

export default SignUp;