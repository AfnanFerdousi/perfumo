import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://arcane-retreat-77656.herokuapp.com/item/')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='container row'>
            {
                items.map(perfumeItems => <ManageItem key={items._id} item={perfumeItems}></ManageItem>)
            }            
        </div>
    );
};

export default ManageItems;