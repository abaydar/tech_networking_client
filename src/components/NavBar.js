import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div id="nav-bar">
            <Link to="/users">
                <button id="users">All Users</button>
            </Link>
            <Link to="/posts">
                <button id="posts">All Posts</button>
            </Link>
            <Link to="/profile">
                <button id="profile">My Profile</button>
            </Link>
        </div>
    )
}

export default NavBar