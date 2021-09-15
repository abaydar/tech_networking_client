import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/postsActions'
import PostsForm from './PostsForm';

class PostsList extends Component{
    
    state = {
        sortClicked: false,
        buttonClicked: false
    }

    addLike = (post) => {
        this.props.addLike(post)
    }

    formatTime = (created) => {
        const date = created.slice(0, 10)
        const time = created.slice(11, 19)
        return <h4 class="text-sm"><strong> posted: </strong> {date} <strong>@</strong> {time}</h4>
    }

    sortLikesButton = () => {
        this.setState((prevState) => {
            return {
                sortClicked: !prevState.sortClicked
            }
        })

        return this.state.sortClicked ? this.props.posts.sort((a,b) => a.likes < b.likes ? 1 : -1) : this.props.posts.sort((a,b) => a.id > b.id ? 1 : -1)
    }

    renderForm = () => {
        this.setState((prevState) => {
          return { buttonClicked: !prevState.buttonClicked }
        })
      }

   render(){
    return(
        <div class="p-4">
                {this.props.newsfeed ? null : <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={this.renderForm}>Create Post</button>}               
                <div>
                    {this.state.buttonClicked ? <PostsForm/> : null }
                </div>
        {this.props.newsfeed ? null : <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={this.sortLikesButton}>Sort by likes</button>}
           {this.props.posts && this.props.posts.map(p => <ul class="p-4 max-w-sm mx-auto bg-purple-200 rounded-xl shadow-md flex items-center space-x-4 border-2">
        <li key={p.id} >
            <h3 class="p-4 text-xl font-medium text-purple-800"> {p.title} </h3>
            {this.formatTime(p.created_at)}
            <h4 class="text-sm"> <strong>by: </strong> {p.user.email}</h4>
            <p class="p-4 text-base"> {p.content} </p>
            <h4 class="p-2 text-pink-700"> {p.likes} likes</h4>
            {this.props.user ? null : <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.addLike(p)}>
                Like
            </button>}
        </li>
    </ul>)}
        </div>
    )
    }
}

export default connect(null, { addLike })(PostsList)