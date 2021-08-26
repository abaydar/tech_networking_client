import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

import Router from './Router'
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
    const { isLoading } = useAuth0()

    if (isLoading) return <div>Loading...</div>

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