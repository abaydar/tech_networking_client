import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { friendshipsReducer } from "./friendshipsReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    friendships: friendshipsReducer
})