import Age from "./Age"

const Welcome = (props) =>{
    return(
        <>
            {props.name === "John" ? <p>Hello, {props.name}</p> : <p>Your Name is not John</p>}
            <Age age={props.age}/>
        </>
    )

}

export default Welcome