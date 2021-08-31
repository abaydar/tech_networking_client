import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/friendshipActions'
import { useEffect } from 'react'

const FriendshipsContainer = (props) => {


    console.log(props.userDB.friendships)

    return (
        <div>
            <h1>Friendships</h1>
            {props.userDB.friendships && props.userDB.friendships.map(f => {
                <ul>
                    <li key={f.id}>{f.friend.email}</li>
                </ul>
            })}
        </div>
    )


}

export default connect(null)(FriendshipsContainer)