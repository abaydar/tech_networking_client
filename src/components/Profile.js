import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserProfile } from '../actions/authActions';


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
                <JSONPretty data={user}>
                </JSONPretty>
            </div>
        )
    )

}

export default connect(null, {fetchUserProfile})(Profile)

