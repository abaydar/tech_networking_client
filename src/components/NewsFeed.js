import React from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';

const NewsFeed = (props) => {

    return(
        <div>
            <h1 class="text-center text-purple-600 text-2xl font-medium">Tech Connection Feed</h1>
            {props.user.friends && props.user.friends.map((f) => <PostsList posts={f.posts}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(NewsFeed)