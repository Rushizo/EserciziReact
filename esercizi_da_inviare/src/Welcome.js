import Age from "./Age"

const Welcome = (props) =>{
    return(
        <>
            {props.name === "John" ? <p>Hello, {props.name}</p> : <p>Your Name is not John</p>}
            {props.age > 18 && props.age < 65 ? <Age age={props.age}/> : <p>Age prop is less than 18 or greater then 65</p>}
           
        </>
    )

}

export default Welcome