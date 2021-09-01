import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/usersActions'
import PostsList from './PostsList';

class UserCard extends Component{

  addFriend = (userId, friendId) => {
    this.props.addFriend(userId, friendId)
  }

  renderPosts = () => {
    return <PostsList posts={this.props.posts}/>
  }

  render(){
    return (
      <div>
        <h3>{this.props.email}</h3>
        <button onClick={() => this.addFriend(this.props.currentUserId, this.props.id)}>Add Friend</button>
        <button onClick={() => this.renderPosts}>Posts</button>
      </div>
    );
  } 
}

export default connect(null, { addFriend })(UserCard);