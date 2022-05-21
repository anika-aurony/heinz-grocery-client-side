import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';


const ManageInventories = () => {
    const navigate = useNavigate()
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you to delete?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }

    const navigateAddItem = event => {
        navigate('/addItem')

    }

    return (
        <div>
            <h1 className=' ps-4'>Manage Inventories</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.supplier}</td>
                            <td><button onClick={()=> handleDelete(item._id)}>X</button></td>
                        </tr> )
                    }

                </tbody>
            </Table>
            {/* {
                items.map(item => 
                // <div key={item._id}>
                //     <h5>{item.name}</h5>

                // </div>
                )
            } */}
            <Link to="/addItem" className='mx-auto' onClick={navigateAddItem}><button className='button mt-3 ms-5' >Add Item</button></Link>
        </div>
    );
};

export default ManageInventories;