import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    
    return (
        <div>
            <h3>friends details:</h3>
            <p>Email:{friend.email}</p>
            <p>Id:{friend.id}</p>
        </div>
    );
};

export default FriendDetails;