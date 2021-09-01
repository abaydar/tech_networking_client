import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/usersActions'
import UserCard from './UserCard';


class UsersList extends Component{
    
    addFriend = (userId, friendId) => {
        this.props.addFriend(userId, friendId)
    }

    
    render(){
        return(
            <div>
                {this.props.users.map(user => {
                    return (
                    <UserCard id={user.id} email={user.email} friendships={user.friendships} posts={user.posts} currentUserId={this.props.authId}/>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authId: state.auth.id
    }
}


export default connect(mapStateToProps, { addFriend })(UsersList)



// renderUsers = Object.keys(users).map(userId => {
//     return <ul>
//     <li key={userId}><Link  to={`/users/${userId}`}>{users[userId].email}</Link> 
//     <button></button>
//     </li>
//     </ul>
// })

// {Object.keys(this.props.users).map(userId => {
//     return <ul>
//     <li key={userId}><Link  to={`/users/${userId}`}>{this.props.users[userId].email}</Link> 
//     <button onClick={() => this.addFriend(this.props.authId, userId)}>Add Friend</button>
//     </li>
//     </ul>})}