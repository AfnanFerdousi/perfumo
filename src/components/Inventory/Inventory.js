import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllItems from '../AllItems/AllItems';
import './Inventory.css'

const Inventory = () => {
    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        fetch('https://arcane-retreat-77656.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setPerfumes(data))
    },[])
    return (
        <div>
            <h2 className='text-center d-inline-block borderClass my-3'>ALL PERFUMES</h2>
            <br/>
            <Link to='/addperfume' className='btn button btn-primary'>Add New Perfume</Link>
            <div className='row container-fluid mt-5'>
            {
                perfumes.map(perfumeItem => <AllItems key={perfumeItem._id} item={perfumeItem}></AllItems>)
            }
        </div>          
        </div>
    );
};

export default Inventory;