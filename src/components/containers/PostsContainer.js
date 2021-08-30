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
                <PostsList posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)