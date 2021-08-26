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
            <form onSubmit={this.handleSubmit}>
                <label>Title: </label>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="title" />
                <label>Content: </label>
                <input type="textarea" value={this.state.content} onChange={this.handleChange} name="content" />
                <input type="submit" value="Publish"/>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {userId: state.auth.id}
}

export default connect(mapStateToProps, { addPost })(PostsForm)