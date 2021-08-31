import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserShow from './UserShow';
import { Route } from 'react-router-dom';

const UsersList = ({ users }) => {

    const renderUsers = Object.keys(users).map(userId => {
        return <ul>
        <li key={userId}><Link  to={`/users/${userId}`}>{users[userId].email}</Link></li>
        </ul>
    })
    return(
        <div>
           {renderUsers}
        </div>
    )
}



export default UsersList