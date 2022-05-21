import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const navigate = useNavigate()

    const navigateAddItem = event => {
        navigate('/addItem')

    }

    return (
        <div>
            <h1>hi</h1>
            <Link to="/addItem" className='mx-auto' onClick={navigateAddItem}><button className='button mt-3 ms-5' >Add Item</button></Link>
        </div>
    );
};

export default ManageInventories;