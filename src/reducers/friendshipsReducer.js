export const friendshipsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_FRIENDS":
            return action.payload
        case "ADD_FRIEND":
            return action.payload
        default:
            return state
    }
}