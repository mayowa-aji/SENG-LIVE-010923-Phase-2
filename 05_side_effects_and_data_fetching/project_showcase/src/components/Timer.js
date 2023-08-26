// Deliverable 3: Demonstrate the unmounting and cleanup
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect`
    // with a console.log()

    // Open up the devtools to observe when the cleanup
    // will occur during the stages of Component Lifecycle
import { useState, useEffect } from "react"
const Timer = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        
        return () => clearInterval(intervalId)
    },[] )

    return(
        <>
        <h1>Timer:</h1>
        <p>Count:{count}</p>
        </>

    )
}
export default Timer
