import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

import Router from './Router'

const App = () => {
    return(
        <div>
            <LoginButton />
            <LogoutButton />
            <Profile />
            <Router />
        </div>
    )
}

export default App