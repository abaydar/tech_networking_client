import React from 'react';
import { connect } from 'react-redux'

const PostsList = ({ posts }) => {

    return(
        <div>
           {posts.map(p => <ul>
                <li key={p.id} >
                    <h3> {p.title} </h3>
                    <h4> Posted by: {p.user.email}</h4>
                    <p> {p.content} </p>
                </li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)