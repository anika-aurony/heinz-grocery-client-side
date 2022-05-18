import React from 'react';
import grocery from '../../../images/grocery.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img
          className='banner'
          src={grocery}
          alt="Second slide"
        />
            
        </div>
    );
};

export default Banner;