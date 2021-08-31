export const fetchFriends = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/friendships')
        .then(resp => resp.json())
        .then(friends => dispatch({ type: 'FETCH_FRIENDS', payload: friends }))
    }
}

export const addFriend = (userId, friend) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/friendships`, {
            method: 'POST',
            body: JSON.stringify(friend),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(friend => dispatch({ type: 'ADD_FRIEND', payload: friend }))
    }
}