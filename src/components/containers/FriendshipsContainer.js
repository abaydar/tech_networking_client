import UserCard from "../UserCard"

const FriendshipsContainer = (props) => {

    return (
        <div>
            <h1 class="text-center text-blue-700 text-2xl font-medium">Tech Connections</h1>
            {props.userDB.friendships && props.userDB.friendships.map(f => {
                return (
                    <UserCard id={f.friend.id} email={f.friend.email} user={true} />
                )
            })}
        </div>
    )

}

export default FriendshipsContainer
