import { connect } from 'react-redux'
import { fetchFriends } from '../../actions/friendshipActions'
import { useEffect } from 'react'

const FriendshipsContainer = (props) => {

    useEffect(() => {
        props.fetchFriends()
    }, [])

    return (
        <div>
            
        </div>
    )


}

export default connect(null, { fetchFriends })(FriendshipsContainer)