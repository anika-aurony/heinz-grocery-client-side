import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({item}) => {
    const {_id, name, price, quantity, supplier, img, des} = item;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='item'>
            
            <img className='pic' src={img} alt=""/>
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h4>Quantity: {quantity}</h4>
            <h5>Supplier: {supplier}</h5>
            <p>{des}</p>
            <button onClick={() => navigateToInventory(_id)} className='button'>Update</button>
        </div>
    );
};

export default Product;