import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }

    return (
        <div>
            <div className='d-flex mt-3 align-items-center'>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
                <p className='mt-2 px-1'> Or</p>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>

            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()}
                className='btn btn-info d-block w-50 mx-auto  mt-3 '>
                <img className='px-2' style={{ width: '50px' }} src={google} alt="" />
                Google Sign In
            </button>
            
        </div>
    );
};

export default SocialLogin;