import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { sortPostsByLikes } from '../../reducers/rootReducer'
import { fetchPosts } from '../../actions/postsActions'
import PostsForm from '../PostsForm'
import PostsList from '../PostsList'


class PostsContainer extends Component {

    state = {
        buttonClicked: false
      }

    componentDidMount(){
        this.props.fetchPosts()
    }

    renderForm = () => {
        this.setState((prevState) => {
          return { buttonClicked: !prevState.buttonClicked }
        })
      }
   
    render(){
        return(
            <div>
                <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={this.renderForm}>Create Post</button>                <div>
                    {this.state.buttonClicked ? <PostsForm/> : null }
                </div>
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