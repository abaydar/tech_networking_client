import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersContainer from './UsersContainer'
import Home from './Home'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={UsersContainer} />
        </Switch>
    )
}

export default Router 