import { useGithubUser } from "./UseGithubUser"

const GithubUser = ({username}) => {
    const {data} = useGithubUser(username)
    
    return <div>
        {data && (
        <>
        <div>
        <h1>{data.name}</h1>
        <p>{data.login}</p>
        </div>
        </>
        )}
    </div>
}

export default GithubUser