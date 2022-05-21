import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect( () => {
        const url = `http://localhost:5000/inventory/${id}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    const navigateManageInventories = event => {
        navigate('/manageInventories')

    }
    
    return (
        <div className='detail'>
            <h1>Product Detail of {item.name}</h1>
            <img className='pic' src={item.img} alt=""/>
            <h2>{item.name}</h2>
            <h4>Price:{item.price}</h4>
            <h4>Quantity:{item.quantity}</h4>
            <h5>Supplier:{item.supplier}</h5>
            <p>ID: {item._id}</p>
            <button className='button'>Delivered</button>
            <Link to="/manageInventories" className='mx-auto' onClick={navigateManageInventories}><button className='button mt-3 ms-5' >Manage Inventories</button></Link>
            
        </div>
    );
};

export default Inventory;