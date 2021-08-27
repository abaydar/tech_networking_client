import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'
import { useEffect } from 'react'
import PostsList from './PostsList'

const UserPostsList = (props) => {
 
    useEffect(() => {
        props.fetchUsers()        
    }, [])
    
    // const userId = () => {return props.userId}

    const userId = props.userId

    const findCurrentUser = (userId) => {
        return props.users.find((u) => {
            return u.id === userId
            // debugger
        })
    }

    return (
        <div>
            {findCurrentUser(userId) ? <PostsList posts={findCurrentUser(userId).posts} /> : "Loading..."}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(UserPostsList)