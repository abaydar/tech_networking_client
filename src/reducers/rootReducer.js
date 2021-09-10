import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer"
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer,
    postsR: postsReducer
})

// export const sortPostsByLikes = (state) => {
//     const posts = state.postsR.posts
//     debugger
//     return posts.sort((a,b) => (a.likes < b.likes) ? 1 : -1)
// }