import GithubUser from "./GithubUser"
import { useParams } from "react-router-dom"

const ShowGithubUser = () => {
    const {username = "this is an invalid name"} = useParams()

    return(
        <>
            <GithubUser username={username}/>
        </>
    )
}

export default ShowGithubUser