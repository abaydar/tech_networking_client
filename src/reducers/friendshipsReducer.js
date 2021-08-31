export const friendshipsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_FRIENDS":
            return action.payload
        default:
            return state
    }
}