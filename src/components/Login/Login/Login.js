import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        // signInWithEmailAndPassword(email, password)
    }

    const navigateSignUp = event => {
        navigate('/register')

    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-primary text-center mt-3 title'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control ref={passwordRef}  type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Heinz Grocery? <Link to="/signUp" className='text-danger pt-2 text-decoration-none' onClick={navigateSignUp}>Please Register</Link></p>
        </div>
    );
};

export default Login;