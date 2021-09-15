import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/postsActions'
import PostsForm from './PostsForm';

function PostsList(props){

    const [sortClicked, toggleSortClicked] = useState(false)
    const [buttonClicked, toggleButtonClicked] = useState(false)
    

    const addLike = (post) => {
        props.addLike(post)
    }

    const formatTime = (created) => {
        const date = created.slice(0, 10)
        const time = created.slice(11, 19)
        return <h4 class="text-sm"><strong> posted: </strong> {date} <strong>@</strong> {time}</h4>
    }

    const sortLikesButton = () => {
        toggleSortClicked(!sortClicked)
        

        return sortClicked ? props.posts.sort((a,b) => a.likes < b.likes ? 1 : -1) : props.posts.sort((a,b) => a.id > b.id ? 1 : -1)
    }

    const renderForm = () => {
       toggleButtonClicked(!buttonClicked)
      }

    return(
        <div class="p-4">
                {props.newsfeed ? null : <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={renderForm}>Create Post</button>}               
                <div>
                    {buttonClicked ? <PostsForm/> : null }
                </div>
        {props.newsfeed ? null : <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={sortLikesButton}>Sort by likes</button>}
           {props.posts && props.posts.map(p => <ul class="p-4 max-w-sm mx-auto bg-purple-200 rounded-xl shadow-md flex items-center space-x-4 border-2">
        <li key={p.id} >
            <h3 class="p-4 text-xl font-medium text-purple-800"> {p.title} </h3>
            {formatTime(p.created_at)}
            <h4 class="text-sm"> <strong>by: </strong> {p.user.email}</h4>
            <p class="p-4 text-base"> {p.content} </p>
            <h4 class="p-2 text-pink-700"> {p.likes} likes</h4>
            {props.user ? null : <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => addLike(p)}>
                Like
            </button>}
        </li>
    </ul>)}
        </div>
    )
}

export default connect(null, { addLike })(PostsList)