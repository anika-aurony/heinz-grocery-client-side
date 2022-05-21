import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Inventories.css'


const Inventories = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])

    const navigateManageInventories = event => {
        navigate('/manageInventories')

    }

    return (
        <div>
            <h1 className='text-primary text-center'>Items</h1>
            <div className="item-container">
                {
                    items.map(item => <Product key={item._id} item={item}></Product>)
                }
            
            </div>
            
            <Link to="/manageInventories" className='mx-auto' onClick={navigateManageInventories}><button className='button mt-3 ms-5' >Manage Inventories</button></Link>
        </div>
    );
};

export default Inventories;