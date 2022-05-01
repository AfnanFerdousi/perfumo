import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../../api/axiosPrivate';
import Mycards from '../MyCards/MyCards';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItem] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const email = user.email
            const url = `http://localhost:5000/myitem?email=${email}`

            try {
                const { data } = await axiosPrivate.get(url);
                setItem(data)
            }
            catch (error) {
                console.log(error)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getItems()
    }, [user, items])
    return (
        <div className='container text-center'>
            <h2 className='text-center d-inline-block borderClass my-3'>My Items</h2>
            <div className="container row justify-content-center align-items-center text-center">
                {
                    items.map(items => <Mycards key={items._id} items={items}></Mycards>)
                }
            </div>
        </div>
    );
};

export default MyItems;