import React, { Component } from 'react'
import { addPost } from '../actions/postsActions'
import { connect } from 'react-redux'

class PostsForm extends Component {
    
    state = {
        title: '',
        content: '',
        user_id: this.props.userId
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPost({post: this.state})
    }

    render(){
        return(
            <form class="p-8 bg-purple-200 rounded-xl shadow-md flex items-center space-x-4" onSubmit={this.handleSubmit}>
                <label class="text-xl font-medium text-black">Title: </label>
                <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded shadow-md " type="text" value={this.state.title} onChange={this.handleChange} name="title" />
                <label class="text-xl font-medium text-black">Content: </label>
                <textarea class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded shadow-md" value={this.state.content} onChange={this.handleChange} name="content" />
                <input class="bg-purple-700 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-xl font-medium text-white rounded-xl shadow-md p-2" type="submit" value="Publish"/>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {userId: state.auth.id}
}

export default connect(mapStateToProps, { addPost })(PostsForm)