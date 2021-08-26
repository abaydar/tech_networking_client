export const fetchUserProfile = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json'}
          })
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'FETCH_USER_PROFILE', payload: user }))
    }
}