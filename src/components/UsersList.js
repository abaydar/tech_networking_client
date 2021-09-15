import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';


function UsersList(props){
    
    const [search, setSearch] = useState("")
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const searchUsers = () => {
        return props.users.filter((u) => {
            return u.email.toLowerCase().includes(search.toLowerCase())
        })
    }    

    return(
        <div>
            <label class="text-xl font-medium text-black">Search Techies: </label>
            <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded shadow-md " type="text" placeholder="Search..." onChange={handleChange}/>

            {searchUsers().map(user => {
                return (
                <UserCard id={user.id} email={user.email} friendships={user.friendships} posts={user.posts} currentUserId={props.authId}/>
                )
            })}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        authId: state.auth.id
    }
}


export default connect(mapStateToProps)(UsersList)

