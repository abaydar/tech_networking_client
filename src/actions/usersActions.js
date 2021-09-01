// create action to fetch users from API

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({ type: 'FETCH_USERS', payload: users }))
    }
}

export const addFriend = (userId, friendId) => {
    const friendship = {
        user_id: userId,
        friend_id: friendId
    }
    return (dispatch) => {
        fetch(`http://localhost:3000/friendships`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(friendship)
        })
        .then(resp => resp.json())
        .then(friendship => dispatch({ type: 'ADD_FRIEND', payload: friendship }))
    }
}



// export const addUser = user => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/users', {
//             method: 'POST',
//             body: JSON.stringify(user),
//             headers: { 'Content-Type': 'application/json'}
//         })
//         .then(resp => resp.json())
//         .then(user => dispatch({ type: 'ADD_USER', payload: user }))
//     }    
// }



