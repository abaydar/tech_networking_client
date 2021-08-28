import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfile } from '../actions/authActions';
import UserPostsList from './UserPostsList';

const Profile = (props) => {
    const { user, isAuthenticated } = useAuth0()

    useEffect(() => {
        props.fetchUserProfile(user)        
    }, [])
    
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            <UserPostsList user={props.user}/>
            </div>
        )
    )

}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchUserProfile })(Profile)

