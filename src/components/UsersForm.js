import React, { Component } from 'react'

class UsersForm extends Component {
    
    state = {
        username: '',
        password: ''
    }

    render(){
        return(
            <form>
                <label>Username: </label>
                <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
                <label>password: </label>
                <input type="text" value={this.state.password} onChange={this.handleChange} name="password" />
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

export default UsersForm