export const fetchUserProfile = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer <token>`
            }
          })
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'FETCH_USER_PROFILE', payload: user }))
    }
}