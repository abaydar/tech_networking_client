import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfile } from '../actions/authActions';
import FriendshipsContainer from './containers/FriendshipsContainer';
import PostsList from './PostsList';

const Profile = (props) => {
    const { user, isAuthenticated } = useAuth0()

    useEffect(() => {
        props.fetchUserProfile(user)        
    }, [])

    
    return (
        isAuthenticated && (
            <div>
                <img class="p-4" src={user.picture} alt={user.name}/>
                <h2 class="p-2 text-purple-600 font-medium"><strong class="text-black">Name: </strong>{user.name}</h2>
                <p class="p-2 text-purple-600 font-medium" ><strong class="text-black">Email: </strong>{user.email}</p>
            <h1 class="text-center text-purple-600 text-2xl font-medium">My Posts</h1>
            <PostsList posts={props.userDB.posts} user={true} />
            <FriendshipsContainer userDB={props.userDB}/>
            </div>
        )
    )

}

const mapStateToProps = (state) => {
    return {
        userDB: state.auth
    }
}

export default connect(mapStateToProps, { fetchUserProfile })(Profile)

