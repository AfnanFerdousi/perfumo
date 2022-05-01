import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const AllItems = (allItem) => {
    const [item, setItem] = useState([])
    const navigate = useNavigate()

    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`)
    }

    useEffect(() => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])

    
    const handleDeleteItem = id => {
        const proceed = window.confirm("Are You Sure You Want To Delete This Item?");

        if(proceed){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = item.filter(perfume => perfume._id !== id);
                    console.log(data)
                    setItem(remaining)
                }
            })
            window.location.reload(false)
        }
    }
    return (
        <div className="card col-md-4">
            <img src={allItem.item.perfume || allItem.item.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{allItem.item.name}</h5>
                <p className="card-text">{allItem.item.desc}</p>
               <div className='d-flex justify-content-around'>
                    <button onClick={() => navigateToItemDetails(allItem.item._id)}   href="#"    className="btn btn-primary">Update</button>
                    <button onClick={() => handleDeleteItem(allItem.item._id)} href="#" className="btn btn-danger">Delete</button>
               </div>
            </div>
        </div>
    );
};

export default AllItems;