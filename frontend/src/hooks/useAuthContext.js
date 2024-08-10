// react imports
import { useContext } from "react"

// contexts import
import { AuthContext } from "../context/AuthContext"

// context import

export default function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuthContext must be used inside an AuthContextProvider")
    }
    return context
}
