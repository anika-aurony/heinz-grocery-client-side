import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Inventories.css'


const Inventories = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    console.log(items);
    const productItems = items.slice(0,6);

    useEffect(() => {
        fetch('https://dry-ridge-53156.herokuapp.com/inventory')
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
                    
                    productItems.map(productItem => <Product key={productItem._id} item={productItem}></Product>)
                }
            
            </div>
            
            <Link to="/manageInventories" className='mx-auto' onClick={navigateManageInventories}><button className='button mt-3 ms-5' >Manage Inventories</button></Link>
        </div>
    );
};

export default Inventories;