import { Toast } from 'bootstrap';
import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>


    }


    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        

        await signInWithEmailAndPassword(email, password)
        
        fetch('https://dry-ridge-53156.herokuapp.com/login',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            localStorage.setItem('accessToken', result.accessToken);
            // navigate(from, { replace: true });
        })
    }

    const navigateSignUp = event => {
        navigate('/register')

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        Toast('Sent email');

    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-info text-center mt-3 title'>Please Login</h3>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button variant="info" className='w-50 mx-auto d-block mb-2' type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Heinz Grocery? <Link to="/signUp" className='text-danger pt-2 text-decoration-none' onClick={navigateSignUp}>Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pt-2 text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;