import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div id="nav-bar">
            <Link to="/">
                <button id="profile">My Profile</button>
            </Link>            
            <Link to="/about">
                <button id="about">About Page</button>
            </Link>
            <Link to="/users">
                <button id="users">All Users</button>
            </Link>
            <Link to="/posts">
                <button id="posts">All Posts</button>
            </Link>
        </div>
    )
}

export default NavBar