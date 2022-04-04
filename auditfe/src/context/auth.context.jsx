import React, { useState, useEffect, useContext } from 'react'
import {
    Navigate,
    useLocation,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import getAuth from '../api/auth'
import getDjango from "../api/django"
import LoadingPage from '../pages/loading.page'

const AuthContext = React.createContext()

export function useApi() {
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
    const [api, setApi] = useState(null)

    useEffect(() => {
        const auth = getAuth()
        auth.validateToken(token).then(response => {
            if (response.status === auth.SUCCESS) {
                setApi(getDjango(token))
                setAuthState(AuthStates.SUCCESS)
            } else {
                setAuthState(AuthStates.FAILURE)
            }
        })
    }, [token, AuthStates.FAILURE, AuthStates.SUCCESS])

    return (
        <AuthContext.Provider value={api}>
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