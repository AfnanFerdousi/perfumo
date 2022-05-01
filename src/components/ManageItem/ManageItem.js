import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hook/useItemDetail/useItemDetail';

const ManageItem = () => {
    const {itemId} = useParams();
    const [item, setItem] = useItemDetail(itemId)
    console.log(item);

    const handleDeliveredButton = event =>{
        event.preventDefault();
        const quantity = item.quantity - 1;
        const updatedQuantity = {quantity};
        const url = `http://localhost:5000/item/${itemId}`
        
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Item Delivered Successfully!!!');
        })
        window.location.reload(false)
    }

    const handleRestockButton = event =>{
        const oldQuantity = item.quantity;
        const newQuantity = event.target.quantity.value;
        const quantity = Number(oldQuantity) + Number(newQuantity);
        event.preventDefault();    

        const updatedQuantity = {quantity};
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Item Restocked Successfully!!!');
        })
        window.location.reload(false)
    }
    // console.log(item)
    return (
        <div className='container d-flex text-center justify-content-center row'>
        <div className='offset-2 col-md-4 card my-5'>            
            <h2>{item.name}</h2>
            <h5>{item.price}</h5>
            <h5>{item.quantity}</h5>
            <h5>{item._id}</h5>  
            <img src={item.img || item.perfume} alt="perfume"/>             
        </div>
        <div className='offset-2 col-md-4 card my-5'>
            <h3>{item.name}</h3>
            <form onSubmit={handleRestockButton}>
                <input className='mt-5' name='quantity' type='number' placeholder='enter the amount you want to restock'/>
                <button  type='submit' name='stock' className=' ms-3 btn btn-primary'>Re Stock</button>
            </form>
            <div className='d-flex justify-content-around mt-3'>                
                <button onClick={handleDeliveredButton} className='btn btn-success'>Delivered</button>
            </div>            
        </div>
        </div>
    );
};

export default ManageItem;