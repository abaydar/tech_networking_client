import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/usersActions'
import PostsList from './PostsList';

function UserCard(props){

  const [buttonClicked, setButtonClicked] = useState(false)

  const addFriend = (userId, friendId) => {
    props.addFriend(userId, friendId)
  }

  const renderPosts = () => {
    setButtonClicked(!buttonClicked)
  }

  return (
    <div class="p-4">
      <div class="p-8 max-w-sm mx-auto bg-blue-200 rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <h3 class="text-xl font-medium text-black">{props.email}</h3>
          <div class="flex p-2">
            {props.user ? null : <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addFriend(props.currentUserId, props.id)}>Add Friend</button> } 
            {props.user ? null : <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={renderPosts}>Posts</button>}
          </div>
          <div>
            {buttonClicked ? <PostsList posts={props.posts}/> : null }
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addFriend })(UserCard);