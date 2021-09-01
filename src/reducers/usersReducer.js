export const usersReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_USERS":
            return action.payload
        case "ADD_FRIEND":
            const newUser = Object.assign({}, state.find((u) => u.id === action.payload.user_id)) //make copy so can modify friendhsip nondestructively
            newUser.friendships.push(action.payload)
            const userIndex = state.findIndex((u) => u.id === action.payload.user_id)
            const firstHalf = state.slice(0, userIndex)
            const secondHalf = state.slice(userIndex + 1)
            return [...firstHalf, newUser, ...secondHalf]
        default:
            return state
    }
}