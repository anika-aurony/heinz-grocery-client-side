import React from 'react';
import promises from '../../../images/promises-1.jpg'
import promises1 from '../../../images/promises-2.jpg'
import Photo from '../Photo/Photo';
import './Promises.css'





const Promises = () => {
    const pictures = [
        {id: 1, img: promises},
        {id: 2, img: promises1}
    ]
    // console.log(pictures)
    return (
        <div >
            <h1 className='text-primary text-center'>Our Promises</h1>
            <div className='image-container box-shadow-sm'> 
               {
                   pictures.map(picture => <Photo
                    key={picture.id}
                    picture={picture}
                   ></Photo> )
               }
            </div>
        </div>
    );
};

export default Promises;