import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Inventories.css'


const Inventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])

    return (
        <div>
            <h1 className='text-primary text-center'>Items</h1>
            <div className="item-container">
                {
                    items.map(item => <Product key={item.id} item={item}></Product>)
                }
            
            </div>
            <button>Manage Inventories</button>
        </div>
    );
};

export default Inventories;