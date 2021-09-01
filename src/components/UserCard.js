import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/usersActions'
import PostsList from './PostsList';

class UserCard extends Component{

  state = {
    buttonClicked: false
  }

  addFriend = (userId, friendId) => {
    this.props.addFriend(userId, friendId)
  }

  renderPosts = () => {
    this.setState((prevState) => {
      return { buttonClicked: !prevState.buttonClicked }
    })
  }


  render(){
    return (
      <div>
        <h3>{this.props.email}</h3>
        <button onClick={() => this.addFriend(this.props.currentUserId, this.props.id)}>Add Friend</button>
        {/* <PostsList posts={this.props.posts} /> */}
        <button onClick={this.renderPosts}>Posts</button>
        <div>
          {this.state.buttonClicked ? <PostsList posts={this.props.posts}/> : null }
        </div>
      </div>
    );
  } 
}

export default connect(null, { addFriend })(UserCard);