import React from 'react';
import {useNavigate} from 'react-router-dom';

const Item = (item) => {
    const navigate = useNavigate()

    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`)
    }
    // console.log(item);
    return (
        <div className="card col-md-4">
            <img src={item.item.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.item.name}</h5>
                <p className="card-text">{item.item.desc}</p>
                <button onClick={() => navigateToItemDetails(item.item._id)} href="#" className="btn btn-primary">Update</button>
            </div>
        </div>


    );
};

export default Item;