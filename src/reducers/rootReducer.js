import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { friendshipsReducer } from "./friendshipsReducer";
import { authReducer } from "./authReducer"
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    friendships: friendshipsReducer,
    auth: authReducer,
    posts: postsReducer
})