import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'
import { useEffect } from 'react'
import PostsList from './PostsList'

const UserPostsList = (props) => {
 
    useEffect(() => {
        props.fetchUsers()        
    }, [])
    
    const userId = props.user.id

    const findCurrentUser = (userId) => {
        return props.users.find((u) => {
            return u.id === userId
        })
    }

    // console.log(findCurrentUser(userId).posts)

    return (
        <div>
            {findCurrentUser(userId) ? <PostsList posts={findCurrentUser(userId).posts} /> : "Loading..."}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(UserPostsList)