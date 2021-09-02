import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/postsActions'

class PostsList extends Component{
    
    addLike = (post) => {
        this.props.addLike(post)
    }

    formatTime = (created) => {
        const date = created.slice(0, 10)
        const time = created.slice(11, 19)
        return <h4>posted: {date} @ {time}</h4>
    }

   render(){
    return(
        <div>
            <h1>Posts</h1>
           {this.props.posts && this.props.posts.map(p => <ul>
        <li key={p.id} >
            <h3> {p.title} </h3>
            {this.formatTime(p.created_at)}
            <h4> by: {p.user.email} - id: {p.user_id}</h4>
            <p> {p.content} </p>
            <h4> {p.likes} likes</h4>
            {this.props.user ? null : <button onClick={() => this.addLike(p)}>
                Like
            </button>}
        </li>
    </ul>)}
        </div>
    )
    }
}

export default connect(null, { addLike })(PostsList)