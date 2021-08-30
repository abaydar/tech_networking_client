import { connect } from 'react-redux'
import { fetchUserFriends } from '../../actions/friendshipActions'
import { useEffect } from 'react'

const FriendshipsContainer = (props) => {

    useEffect(() => {
        props.fetchUserFriends(props.userId)
    }, [])

    // const userId = props.user.id

    // const findCurrentUser = (userId) => {
    //     return props.users.find((u) => {
    //         return u.id === userId
    //     })
    // }

    console.log(props.fetchUserFriends(props.userId))

    return (
        <div>
            <h1>Friendships</h1>
            {/* {findCurrentUser(userId).friendships} */}
            {props.friendships.map((f) => <ul>
                <li key={f.id}>{f.user_id} - {f.friend.email}</li>
            </ul>)}
        </div>
    )


}

const mapStateToProps = (state) => {
    return { 
        friendships: state.friendships,
        userId: state.auth.id
     }
}

export default connect(mapStateToProps, { fetchUserFriends })(FriendshipsContainer)