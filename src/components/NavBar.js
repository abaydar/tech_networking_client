import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div class="flex border-b">
            <Link to="/" class="-mb-px mr-1">
                <button class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold hover:bg-blue-100" id="profile">My Profile</button>
            </Link>  
            <Link to="/newsfeed" class="-mb-px mr-1">
                <button class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold hover:bg-blue-100" id="newsfeed">Tech Feed</button>
            </Link>          
            <Link to="/about" class="-mb-px mr-1">
                <button class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold hover:bg-blue-100" id="about">About Page</button>
            </Link>
            <Link to="/users" class="-mb-px mr-1">
                <button class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold hover:bg-blue-100" id="users">All Users</button>
            </Link>
            <Link to="/posts" >
                <button class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold hover:bg-blue-100" id="posts">All Posts</button>
            </Link>
        </div>
    )
}

export default NavBar