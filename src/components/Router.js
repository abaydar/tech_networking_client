import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersContainer from './UsersContainer'
import Home from './Home'
import Profile from './Profile'
import PostsContainer from './PostsContainer'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={UsersContainer} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/posts' component={PostsContainer} />
        </Switch>
    )
}

export default Router 