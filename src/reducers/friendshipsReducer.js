export const friendshipsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_FRIENDS":
            return action.payload
        case "FETCH_USER_FRIENDS":
            console.log(action.payload)
        default:
            return state
    }
}