import React, { useState } from 'react'
import { addPost } from '../actions/postsActions'
import { connect } from 'react-redux'

function PostsForm(props) {
    
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.addPost({post: {title, content, user_id: props.userId}})
        setTitle("")
        setContent("")
    }

    return(
        <form class="p-8 bg-purple-200 rounded-xl shadow-md flex items-center space-x-4" onSubmit={handleSubmit}>
            <label class="text-xl font-medium text-black">Title: </label>
            <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded shadow-md " type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
            <label class="text-xl font-medium text-black">Content: </label>
            <textarea class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded shadow-md" value={content} onChange={(e) => setContent(e.target.value)} name="content" />
            <input class="bg-purple-700 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-xl font-medium text-white rounded-xl shadow-md p-2" type="submit" value="Publish"/>
        </form>
    )

}

const mapStateToProps = (state) => {
    return {userId: state.auth.id}
}

export default connect(mapStateToProps, { addPost })(PostsForm)