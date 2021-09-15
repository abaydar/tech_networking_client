import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { sortPostsByLikes } from '../../reducers/rootReducer'
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
                <h1 class="text-center text-purple-600 text-2xl font-medium">All Posts</h1>
               <PostsList posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        posts: state.postsR.posts,
        errors: state.postsR.errors
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)