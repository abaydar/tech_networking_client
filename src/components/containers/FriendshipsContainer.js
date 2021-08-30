import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/friendshipActions'
import { useEffect } from 'react'

const FriendshipsContainer = (props) => {

    useEffect(() => {
        props.fetchFriends()
    }, [])

    return (
        <div>
            <h1>Friendships</h1>
            {props.friendships.map((f) => <ul>
                <li key={f.id}>{f.user_id} - {f.friend_id}</li>
            </ul>)}
        </div>
    )


}

const mapStateToProps = (state) => {
    return { friendships: state.friendships }
}

export default connect(mapStateToProps, { fetchFriends })(FriendshipsContainer)