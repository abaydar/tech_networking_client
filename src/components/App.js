import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Router from './Router';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './NavBar';

const App = () => {
    const { isLoading } = useAuth0()

    if (isLoading) return <div>Loading...</div>

    return(
        <div>
            <NavBar />
            <LoginButton />
            <LogoutButton />
            <Router />
        </div>
    )
}

export default App