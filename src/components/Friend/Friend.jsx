import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, email} = friend;
    return (
        <div className='friend'>
            <h3>Name:{name}</h3>
            <p>Id:{id}</p>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>show more details</Link>
        </div>
    );
};

export default Friend;