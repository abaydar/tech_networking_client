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
      <div class="p-4">
        <div class="p-8 max-w-sm mx-auto bg-blue-200 rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0">
            <h3 class="text-xl font-medium text-black">{this.props.email}</h3>
            <div class="flex p-2">
              {this.props.user ? null : <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.addFriend(this.props.currentUserId, this.props.id)}>Add Friend</button> } 
              {this.props.user ? null : <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.renderPosts}>Posts</button>}
            </div>
            <div>
              {this.state.buttonClicked ? <PostsList posts={this.props.posts}/> : null }
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default connect(null, { addFriend })(UserCard);