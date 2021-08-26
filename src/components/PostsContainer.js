import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import PostsList from './PostsList'
// import UsersForm from './UsersForm'
// import UsersList from './UsersList'


class PostsContainer extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                Posts Container
                <PostsList />
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsContainer)