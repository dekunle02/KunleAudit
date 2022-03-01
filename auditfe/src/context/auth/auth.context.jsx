import React, { useState, useEffect, useContext } from 'react'
import {
    Navigate,
    useLocation,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import getAuth from '../../api/auth'
import LoadingPage from '../../pages/loading.page'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const location = useLocation()
    const token = useSelector(state => state.user.token)

    const AuthStates = {
        LOADING: "loading",
        SUCCESS: "success",
        FAILURE: "failure"
    }

    const [authState, setAuthState] = useState(AuthStates.LOADING)

    useEffect(() => {
        const auth = getAuth()
        auth.validateToken(token).then(response => {
            if (response.status === auth.SUCCESS) {
                setAuthState(AuthStates.SUCCESS)
            } else {
                setAuthState(AuthStates.FAILURE)
            }
        })
    }, [token, AuthStates.FAILURE, AuthStates.SUCCESS])

    return (
        <AuthContext.Provider value={authState}>
            {authState === AuthStates.LOADING && (<LoadingPage />)}
            {authState === AuthStates.FAILURE && (
                <Navigate to="/signin" state={{ from: location }} />
            )}
            {authState === AuthStates.SUCCESS && (
                children
            )}
        </AuthContext.Provider>
    )
}