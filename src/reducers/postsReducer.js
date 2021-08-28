export const postsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_POSTS":
            return action.payload
        case "ADD_POST":
            return [...state, action.payload]
        case "ADD_LIKE":
            return action.payload.likes + 1
        default:
            return state
    }
}