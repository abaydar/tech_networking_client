import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/postsActions'
import PostsList from '../PostsList'


function PostsContainer(props) {

    useEffect(() => {
        props.fetchPosts()
    }, [])

    return(
        <div>
            <h1 class="text-center text-purple-600 text-2xl font-medium">All Posts</h1>
            <PostsList posts={props.posts}/>
        </div>
    )
    
}

const mapStateToProps = state => {
    return { 
        posts: state.postsR.posts,
        errors: state.postsR.errors
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)