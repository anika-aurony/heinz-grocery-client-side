import React from 'react';
import "./Photo.css"

const Photo = ({picture}) => {
    // console.log(picture);
    const {img} = picture
    return (
        <div >
            
            <div>
            <img src={img} alt="..."/>
            
            </div>
        </div>
    );
};

export default Photo;