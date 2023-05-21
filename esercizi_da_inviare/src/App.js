import ClickCounter from "./ClickCounter.js";
import { useState } from "react"

const App = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
      setCounter(count => count + 1);
    };

    const onCounterChange = () => {console.log(`Il counter ora è  ${counter}` )}

    return(
        <>
        <Clickcounter increase={increase} counter={counter} change={onCounterChange({counter})}/>
        </>
    )
}

export default App