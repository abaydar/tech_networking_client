import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../../actions/postsActions'
import PostsForm from '../PostsForm'
import PostsList from '../PostsList'


class PostsContainer extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                All Posts
                <PostsForm />
                <PostsList />
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsContainer)