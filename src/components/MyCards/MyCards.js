import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mycards = items => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);

    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting item with id, ', id);
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = item.filter(user => user._id !== id);
                        setItem(remaining);
                    }
                })
        }
    }
    console.log(items)
    return (
        <div className="col-md-4 my-5 ">
            <Card >
                <Card.Img variant="top" className="img-fluid" src={items.items.img || items.items.perfume} />
                <Card.Body>
                    <Card.Title className='fs-3 fw-bold'>{items.items.name}</Card.Title>                    
                    <p className='fw-bold fs-5 text-danger'>${items.items.price}</p>
                    <p className='fw-bold fs-5'>Quantity: {items.items.quantity}</p>
                    <p className='fw-bold fs-6'>Manufacturer: {items.items.seller}</p>
                    <p className='text-primary'>Email: {items.items.email}</p>
                    <p className='text-dark'>{items.items.desc}</p>
                </Card.Body>

                <button onClick={() => handleItemDelete(items.items._id)} className="btn btn-danger w-50 mx-auto mb-3">Delete</button>
            </Card>
        </div>
    );
};

export default Mycards;