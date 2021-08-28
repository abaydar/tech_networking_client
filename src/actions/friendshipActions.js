export const fetchFriends = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/friendships')
        .then(resp => resp.json())
        .then(friends => dispatch({ type: 'FETCH_FRIENDS', payload: friends }))
    }
}
