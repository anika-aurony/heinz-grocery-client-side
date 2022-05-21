import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const navigateManageInventories = event => {
        navigate('/manageInventories')

    }

    const handleRestock = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        
        const updatedQuantity = {quantity};

        //send data to the server
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url,{
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            event.target.reset();
            fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
            
        })

        
    
    }

    const handleDelivered = event => {
        let quantity =  parseInt(item.quantity)-1;
        
        const updatedQuantity = {quantity};

        //send data to the server
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url,{
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            
            fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
            
        })

        
    
    }

    return (
        <div className=' d-flex justify-content-center'>
            <div className='detail'>
                <h2>Product Detail of {item.name}</h2>
                <img className='pic' src={item.img} alt="" />
                <h3>{item.name}</h3>
                <h4>Price:{item.price}</h4>
                <h4>Quantity:{item.quantity}</h4>
                
                <h5>Supplier:{item.supplier}</h5>
                <p>ID: {item._id}</p>
                <button className='button' onClick={handleDelivered}>Delivered</button>

            </div>
            <div className='detail pt-5 mt-4'>
                <h2>Restock Item</h2>
                <form onSubmit={handleRestock}>
                    <input className='w-50 mx-auto' type='text' name='quantity' placeholder='Quantity' />

                    <input className='button ps-5 pe-5   ms-3' style={{ height: "40px" }} type="submit" value='Restock' />

                </form>

                <br />
                <br />
                <br />
                <Link to="/manageInventories" className='mx-auto mt-5' onClick={navigateManageInventories}><button className='button mt-3 ms-5' >Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default Inventory;