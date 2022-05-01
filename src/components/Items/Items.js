import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [perfume, setPerfume] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/item/home')
        .then(res => res.json())
        .then(data => setPerfume(data))
    },[])
    
    return (
        <div className='text-center'>
        <div className='container-fluid row'>
            {
                perfume.map(perfumeItem => <Item key={perfumeItem._id} item={perfumeItem}></Item>)
            }       
             
        </div>
        <Link to="/inventory" className='btn px-5 py-3 button btn-info text-center mt-3 px-5'>Show All</Link>  
        </div>  
    );
};

export default Items;