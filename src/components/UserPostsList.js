import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'
import { useEffect } from 'react'
import PostsList from './PostsList'

const UserPostsList = (props) => {
 


    return (
        <div>
            
        </div>
    )

}



export default connect(null, { fetchUsers })(UserPostsList)