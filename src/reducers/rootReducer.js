import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer"
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer,
    postsR: postsReducer
})
