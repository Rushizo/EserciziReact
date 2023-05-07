import { useState } from "react"

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (event) => {
        setUserName(event.target.value)
    } 

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const isDisabled = userName === "" || password === "";
    

    

    return(
        <>
            <form>
                <input type="Text" onChange={handleName}></input>
                <input type="password" onChange={handlePassword}></input>
                <button disabled={isDisabled}>Login</button>
            </form>
        </>
    )
}


export default Login