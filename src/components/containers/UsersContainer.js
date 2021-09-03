import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/usersActions'
import UsersList from '../UsersList'


class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        return(
            <div class>
                <h1 class="text-center text-blue-700 text-2xl font-medium">Fellow Techies</h1>
                <UsersList users={this.props.users}/>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersContainer)