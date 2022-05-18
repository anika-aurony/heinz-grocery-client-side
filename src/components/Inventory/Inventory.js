import React from 'react';
import './Inventory.css';

const Inventory = ({item}) => {
    const {name, price, quantity, supplier} = item;
    return (
        <div className='item'>
            
            <img src="" alt=""/>
            <h2>{name}</h2>
            <h4>Price:{price}</h4>
            <h4>Quantity:{quantity}</h4>
            <h5>Supplier:{supplier}</h5>
            <p>{"lorem "}</p>
            <button>Update</button>
        </div>
    );
};

export default Inventory;