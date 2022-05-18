import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
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
                    items.map(item => <Inventory key={item.id} item={item}></Inventory>)
                }

            </div>

        </div>
    );
};

export default Inventories;