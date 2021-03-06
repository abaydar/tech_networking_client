const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

export const fetchPosts = () => {
    return (dispatch) => {
        fetch('https://tech-networking.herokuapp.com/posts')
        .then(resp => resp.json())
        .then(posts => dispatch({ type: 'FETCH_POSTS', payload: posts }))
    }
}

export const addPost = post => {
    return (dispatch) => {
        fetch('https://tech-networking.herokuapp.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => handleErrors(resp))
        .then(post => dispatch({ type: 'ADD_POST', payload: post }))
        .catch(error => dispatch({ type: 'ERROR', payload: error}))
    }    
}

export const addLike = (post) => {
    return (dispatch) => {       
        fetch(`https://tech-networking.herokuapp.com/posts/${post.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                "likes": ++post.likes
            })
        })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_LIKE', payload: post }))
    }  
}
