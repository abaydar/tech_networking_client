import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike } from '../actions/postsActions'

class PostsList extends Component{
    
    addLike = (post) => {
        this.props.addLike(post)
    }

   render(){
    return(
        <div>
            <h1>Posts</h1>
           {this.props.posts && this.props.posts.map(p => <ul>
        <li key={p.id} >
            <h3> {p.title} </h3>
            <h4> Posted by: {p.user.email} - id: {p.user_id}</h4>
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