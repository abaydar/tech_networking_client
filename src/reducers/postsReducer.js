export const postsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_POSTS":
            return action.payload
        case "ADD_POST":
            return [...state, action.payload]
        case "ADD_LIKE":
            const postIndex = state.findIndex((p) => p.id === action.payload.id)
            const firstHalf = state.slice(0, postIndex)
            const secondHalf = state.slice(postIndex + 1)
            return [...firstHalf, action.payload, ...secondHalf]
        default:
            return state
    }
}