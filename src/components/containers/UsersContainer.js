import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/usersActions'
import UsersList from '../UsersList'


function UsersContainer(props){

    useEffect(() => {
        props.fetchUsers()
    }, [])

    return(
        <div class>
            <h1 class="text-center text-blue-700 text-2xl font-medium">Fellow Techies</h1>
            <UsersList users={props.users}/>
        </div>
    )
    
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersContainer)