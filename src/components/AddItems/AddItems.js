import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer } from 'react-bootstrap';



const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(data.insertedId){
                window.confirm("Item added")
            }
        })

    };

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Add New Item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='User Name' value={user.displayName} {...register("userName")} readOnly />
                <input className='mb-2' placeholder='email' value={user.email} {...register("email")} readOnly />
                <br/>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                <textarea input className='mb-2' placeholder='Description' {...register("des")} />
                <input className='mb-2' placeholder='Photo URL' {...register("img")} />
                <input type="submit" value= "Add Item" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItems;