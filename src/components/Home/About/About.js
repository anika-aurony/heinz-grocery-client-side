import React from 'react';
import download from '../../../images/wholesale.jpg'
import './About.css'

const About = () => {
    return (
        <div className='colour'>
            <h3 className='text-center mt-5'>Why choose us?</h3>
            <div className='image-container'>
                <div>
                    <ul className='w-50 mx-auto list-group mt-5 ul'>
                        <li className='list-group-item list-group-item-success'>Largest warehouse capacity</li>
                        <li className='list-group-item list-group-item-dark'>Reasonable price</li>
                        <li className='list-group-item list-group-item-danger'>Cold stores system available</li>
                        <li className='list-group-item list-group-item-warning'>Optimum temperature maintain</li>
                        <li className='list-group-item list-group-item-info'>Healthy and pure</li>
                        <li className='list-group-item list-group-item-primary'>No preservatives added</li>
                    </ul>
                </div>
                <div>
                    <img

                        src={download}
                        alt=" "
                    />
                </div>
            </div>
        </div>
    );
};

export default About;