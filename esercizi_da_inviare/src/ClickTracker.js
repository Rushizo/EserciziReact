import { useState } from "react"

const ClickTracker = (props) => {
    const [value, setValue] = useState("");

    function handleValue(event){
        setValue(event.target.id)
    }



    return(
        <>
            <button onClick={handleValue} id="1">Button 1</button>
            <button onClick={handleValue} id="2">Button 2</button>
            <button onClick={handleValue} id="3">Button 3</button>
            <h1>Questo è il bottone {value}</h1>
        </>
    )
}

export default ClickTracker;