import { useState } from "react"
import Welcome from "./Welcome"

const InteractiveWelcome = () => {
    const [name, setName] = useState("")
    
    function handleName(event){
        setName(event.target.value)
    }


    return(
        <>
            <input type="text" value={name} onInput={handleName}></input>
            <Welcome name={name} age={25}/>
        </>
    )
}

export default InteractiveWelcome