import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({item}) => {
    const {id, name, price, quantity, supplier} = item;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='item'>
            
            <img src="" alt=""/>
            <h2>{name}</h2>
            <h4>Price:{price}</h4>
            <h4>Quantity:{quantity}</h4>
            <h5>Supplier:{supplier}</h5>
            <p>{"lorem "}</p>
            <button onClick={() => navigateToInventory(id)} className='button'>Update</button>
        </div>
    );
};

export default Product;