import { useEffect, useState } from "react"

const Counter = (props) => {
    const [counter, setCounter] = useState(props.start)
    

    const clickButton = () => {
        setCounter(counter + props.incrementAmount)
    }

    return(
        <>
            <p>{counter}</p>
            <button onClick={clickButton}>Counter</button>
        </>
    )
}

export default Counter

