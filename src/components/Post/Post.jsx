import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, body, title } = post;
    const navigate = useNavigate();
    const buttonHandler = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>Id: {id}</p>
            <h4>Title: {title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>show details</Link>
            <Link to={`/post/${id}`}><button>show button</button></Link>
            <button onClick={buttonHandler}>btn handler</button>
        </div>
    );
};

export default Post;