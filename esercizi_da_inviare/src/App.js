import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Link } from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser"

const App = () => {

    return(
        <>
        <Routes>
            <Route path="users/:username" element={<ShowGithubUser />} />       
        </Routes>
        <p><Link to="users/rushizo">Link to my repository</Link></p>
        <p><Link to="users/yangus98">Link to my friend's repository</Link></p>
        <p><Link to="users/RobertoFanara">Link to my friend Roberto</Link></p>
        </>
    )
}

export default App