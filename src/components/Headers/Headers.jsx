import React from 'react';
// import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import './Headers.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Headers = () => {
    return (
        <nav>
           <ActiveLink to="home">Home</ActiveLink>
           <ActiveLink to="friends">friends</ActiveLink>
           <ActiveLink to="posts">posts</ActiveLink>
           <ActiveLink to="about">About</ActiveLink>
           <ActiveLink to="contact">contact</ActiveLink>
        </nav>
    );
};

export default Headers;