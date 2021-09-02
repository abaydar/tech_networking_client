import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    return (
    !isAuthenticated && (
        <div class="p-4 float-left">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => loginWithRedirect()}>
                Log In
            </button>
        </div>
    )
    )
}

export default LoginButton
