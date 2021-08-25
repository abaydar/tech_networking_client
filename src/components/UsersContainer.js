// houses data and methods (mount signup/login form)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/usersActions'
import UsersForm from './UsersForm'
// import UsersList from './UsersList'


class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }


    render(){
        return(
            <div>
                Users Container
                <UsersForm />
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer)