import { useState } from "react"
import GithubUser from "./GithubUser"

const App = () => {
    const [username, setUsername] = useState("")

    return(
        <div>
            <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            <GithubUser username={username}/>
        </div>
    )
}

export default App