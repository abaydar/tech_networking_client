import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/usersActions'
import UserCard from './UserCard';


class UsersList extends Component{
    
    state = {
        search: ""
    }
    
    addFriend = (userId, friendId) => {
        this.props.addFriend(userId, friendId)
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value})
    }

    searchUsers = () => {
        return this.props.users.filter((u) => {
            return u.email.toLowerCase().includes(this.state.search.toLowerCase())
        })
    }

    
    render(){
        return(
            <div>
                <label class="text-xl font-medium text-black">Search Techies: </label>
                <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded shadow-md " type="text" placeholder="Search..." onChange={this.handleChange}/>

                {this.searchUsers().map(user => {
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

