import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    

    useEffect(() => {
        const email = user.email;
        
        
        fetch(`https://dry-ridge-53156.herokuapp.com/user?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setItems(data));

    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you to delete?');
        if(proceed){
            const url = `https://dry-ridge-53156.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }

    return (
        <div>
                <h1>My Items: {items.length}</h1>
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
                            <td>{item.email}</td>
                            
                            <td><button onClick={()=> handleDelete(item._id)}>X</button></td>
                        </tr> )
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default MyItems;