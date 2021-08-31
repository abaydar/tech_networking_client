import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { fetchUsers } from '../../actions/usersActions'
import UsersList from '../UsersList'
import UserShow from '../UserShow';


class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        return(
            <div>
                All Users
                <UsersList users={this.props.users}/>
                <Route path={`${this.props.match.url}/:userId`} render={routerProps => <UserShow {...routerProps} users={this.props.users} />} />
           </div>
        )
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersContainer)