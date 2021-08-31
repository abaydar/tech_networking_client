import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFriend } from '../actions/friendshipActions'


class UsersList extends Component{
    
    addFriend = (userId, friend) => {
        this.props.addFriend(userId, friend)
    }

    
    render(){
        return(
            <div>
            {Object.keys(this.props.users).map(userId => {
                <ul>
                <li key={userId}><Link  to={`/users/${userId}`}>{this.props.users[userId].email}</Link> 
                <button onClick={() => this.addFriend(userId, this.props.friend)}></button>
                </li>
                </ul>})}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friend: state.auth.id
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