export const usersReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_USERS":
            return action.payload
        case "ADD_FRIEND":
            // const user = state.find((u) => u.id === action.payload.user_id)
            // return [...state, [...state.user.friendships, action.payload]]
        default:
            return state
    }
}