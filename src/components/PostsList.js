import React from 'react';
import { connect } from 'react-redux'

const PostsList = ({ posts, email }) => {

    return(
        <div>
           {posts.map(p => <ul>
                <li key={p.id} >
                    <h3> {p.title} </h3>
                    <h4> Posted by: {email}</h4>
                    <p> {p.content} </p>
                </li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        posts: state.posts, 
        email: state.auth.email 
    }
}

export default connect(mapStateToProps)(PostsList)