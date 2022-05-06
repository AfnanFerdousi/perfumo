import React, { useState } from 'react';
import './AddNewPerfume.css';
import {useForm} from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddNewPerfume = () => {
    const [agree, setAgree] = useState(false);
    const [user] = useAuthState(auth);
    const {register, handleSubmit} = useForm()
    console.log(user)
    const onSubmit = event =>{
        fetch('https://arcane-retreat-77656.herokuapp.com/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Perfume added successfully!!!');
            window.location.reload(false)
        })
        
    }
    return (
        <div className='perfume'>
            <h3 className=' my-5 text-center'>Add New Perfume In <span className='text-purple'>PERFUMO</span></h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" {...register("name")} id="" required placeholder='Perfume Name'/>
                <input {...register("email", {required: true})} type="email" required name="email" value={user.email} id="" placeholder='Email' readOnly/>
                <input type="text" name="perfume" {...register("perfume", {required: true})} id="" placeholder='Perfume Image'/>
                <input type="text" name="desc" {...register("desc", {required: true})} id="" placeholder='Perfume Description' required/>
                
                <input {...register("price", {required: true})} type="number" name="price" id="" placeholder='$$$' required/>
                <input {...register("quantity", {required: true})} type="number" name="quantity" id="" placeholder='Quantity' required/>
                <input {...register("seller", {required: true})} type="type" name="seller" id="" placeholder='Seller' required/>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Perfumo's Terms and Conditions</label>
                <input
                    className='w-50 mx-auto button btn btn-primary mt-2'
                    type="submit"
                    value="Add Perfume" />
            </form>            
        </div>
    );
};

export default AddNewPerfume;