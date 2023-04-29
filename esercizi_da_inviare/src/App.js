import Age from "./Age"

const Welcome = ({name = <strong>Pietro</strong>, age = 25}) => {
    return(
        <>
            <p>Welcome, {name}</p>
            <Age/>
        </>
    )
} 

export default Welcome

