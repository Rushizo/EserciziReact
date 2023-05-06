import { useEffect, useState } from "react"

const Counter = (props) => {
    const [counter, setCounter] = useState(props.start)
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + props.incrementAmount)
        }, props.incrementInterval);
       
    }, [])

    return(
        <h1>{counter}</h1>
    )
}

export default Counter

