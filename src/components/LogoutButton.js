import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
            <div class="p-2">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={() => logout()}>
                    Log Out
                </button>
            </div>
        )
    )
}

export default LogoutButton