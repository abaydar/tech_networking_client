import UserCard from "../UserCard"

const FriendshipsContainer = (props) => {

    return (
        <div>
            <h1>Friendships</h1>
            {props.userDB.friendships && props.userDB.friendships.map(f => {
                return (
                    <UserCard id={f.friend.id} email={f.friend.email} user={true} />
                )
            })}
        </div>
    )

}

export default FriendshipsContainer

{/* <ul>
                    <li key={f.id}>{f.friend.email}</li>
                </ul> */}