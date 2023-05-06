import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000);
       
    }, [])

    return(
        <h1>{counter}</h1>
    )
}

export default Counter

// setInterval(() => {
//     setCounter(counter => counter + 1)
// }, 1000)
