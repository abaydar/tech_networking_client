import React, { Component } from 'react'
import { addUser } from '../actions/usersActions'
import { connect } from 'react-redux'

class UsersForm extends Component {
    
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser({user: this.state})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
                <label>password: </label>
                <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default connect(null, { addUser })(UsersForm)