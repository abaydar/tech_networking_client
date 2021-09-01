import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersContainer from './containers/UsersContainer'
import Home from './Home'
import Profile from './Profile'
import PostsContainer from './containers/PostsContainer'
// import UserShow from './UserShow'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={UsersContainer} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/posts' component={PostsContainer} />
            {/* <Route path='/users/:id' component={UserShow} /> */}
        </Switch>
    )
}

export default Router 