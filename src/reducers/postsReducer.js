const initialState = {
    posts: [],
    errors: []
}


export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_POSTS":
            return {...state, posts: action.payload}
        case "ADD_POST":
            return {...state, posts: [...state.posts, action.payload]}
        case "ADD_LIKE":
            const postIndex = state.posts.findIndex((p) => p.id === action.payload.id)
            const firstHalf = state.posts.slice(0, postIndex)
            const secondHalf = state.posts.slice(postIndex + 1)
            return {...state, posts: [...firstHalf, action.payload, ...secondHalf]}
        case "ERROR":
            return {...state, errors: [...state.errors, action.payload]}
        case "CLEAR_ERRORS":
            return {...state, errors: []}
        default:
            return state
    }
}