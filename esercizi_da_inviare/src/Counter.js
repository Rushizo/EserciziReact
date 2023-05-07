import { useEffect, useState } from "react"
import CounterDisplay from "./CounterDisplay";

const Counter = (props) => {
    const [counter, setCounter] = useState(props.start)
    

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((counter) => counter + props.incrementAmount)
        }, props.incrementInterval);
       
    }, [])

    return(
        <CounterDisplay counter={counter}/>
    )
}

export default Counter

