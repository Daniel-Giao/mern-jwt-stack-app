// react imports
import { useContext } from "react"

// context import
import { WorkoutsContext } from "../context/WorkoutContext"

export default function useWorkoutsContext() {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw new Error("useWorkoutsContext must be used inside an WorkoutsContextProvider")
    }
    return context
}
