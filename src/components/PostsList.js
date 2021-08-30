import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addLike } from '../actions/postsActions'

class PostsList extends Component{
    
    // addLike = (post) => {
    //     this.props.addLike(post)
    // }

    // renderPosts = () => {
    //     this.props.posts.map(p => <ul>
    //     <li key={p.id} >
    //         <h3> {p.title} </h3>
    //         <h4> Posted by: {p.user.email}</h4>
    //         <p> {p.content} </p>
    //         <h4> {p.likes} likes</h4>
    //         {/* <button onClick={() => this.addLike(p)}>
    //             Like
    //         </button> */}
    //     </li>
    // </ul>)

    // }

   render(){
    return(
        <div>
            <h1>Posts</h1>
           {this.props.posts.map(p => <ul>
        <li key={p.id} >
            <h3> {p.title} </h3>
            <h4> Posted by: {p.user.email} - id: {p.user_id}</h4>
            <p> {p.content} </p>
            <h4> {p.likes} likes</h4>
            {/* <button onClick={() => this.addLike(p)}>
                Like
            </button> */}
        </li>
    </ul>)}
        </div>
    )
    }
}

const mapStateToProps = state => {
    return { 
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)