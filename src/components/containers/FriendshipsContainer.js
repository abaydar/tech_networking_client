

const FriendshipsContainer = (props) => {

    return (
        <div>
            <h1>Friendships</h1>
            {props.userDB.friendships && props.userDB.friendships.map(f => {
                return <ul>
                    <li key={f.id}>{f.friend.email}</li>
                </ul>
            })}
        </div>
    )

}

export default FriendshipsContainer