import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div id="nav-bar">
            <Link to="/users">
                <button id="users">Users</button>
            </Link>
            <Link to="/posts">
                <button id="posts">Posts</button>
            </Link>
            <Link to="/profile">
                <button id="profile">Profile</button>
            </Link>
        </div>
    )
}

export default NavBar