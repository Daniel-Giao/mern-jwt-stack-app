import { useState } from "react";

// hooks import
import useAuthContext from "./useAuthContext";

const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            // save user to local storage (email + token)
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}

export default useSignup;