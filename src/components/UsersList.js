import React from 'react';
import { connect } from 'react-redux'

const UsersList = ({ users }) => {

    const listUsers = () => {
        users.map(u => <ul>
            <li key={u.id}>{u.username}</li>
        </ul>)
    }

    return(
        <div>
           {listUsers}
        </div>
    )
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps)(UsersList)