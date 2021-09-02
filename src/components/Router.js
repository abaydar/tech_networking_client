import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersContainer from './containers/UsersContainer'
import About from './About'
import Profile from './Profile'
import PostsContainer from './containers/PostsContainer'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Profile} />
            <Route exact path='/users' component={UsersContainer} />
            <Route exact path='/posts' component={PostsContainer} />
            <Route exact path='/about' component={About} />
        </Switch>
    )
}

export default Router 