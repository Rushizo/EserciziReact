import ClickCounter from "./ClickCounter"
import { useState } from "react"

const App = () => {
    const [showCounter, setShowCounter] = useState(true)

    function handleToggleCounter(){
        setShowCounter(val => !val)

    }

    return(
        <div>
        {showCounter ?(<p> <ClickCounter /></p>): false}
        <button onClick={handleToggleCounter}>Remove component</button>
        </div>
    )
}