import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'
import { useEffect } from 'react'
import PostsList from './PostsList'

const UserPostsList = (props) => {
 
    // useEffect(() => {
    //     props.fetchUsers()        
    // }, [])
    
    // const userId = props.userDB.id

    // const findCurrentUser = (userId) => {
    //     return props.users.find((u) => {
    //         return u.id === userId
    //     })
    // }

    // console.log(findCurrentUser(userId).posts)

    return (
        <div>
            <PostsList posts={props.userDB.posts} />
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         users: state.users
//     }
// }

export default connect(null, { fetchUsers })(UserPostsList)