export const fetchFriends = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/friendships')
        .then(resp => resp.json())
        .then(friends => dispatch({ type: 'FETCH_FRIENDS', payload: friends }))
    }
}

export const fetchUserFriends = (userId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/friendships`)
        .then(resp => resp.json())
        .then(friends => dispatch({ type: 'FETCH_USER_FRIENDS', payload: friends }))
    }
}
