import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={this.renderForm}>Create Post</button>
                <div>
                    {this.state.buttonClicked ? <PostsForm/> : null }
                </div>
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