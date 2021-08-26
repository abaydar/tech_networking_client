export const authReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_USER_PROFILE":
            return action.payload
        default:
            return state
    }
}