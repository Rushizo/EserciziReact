import Age from "./Age"

const Welcome = (props) =>{
    return(
        <>
            <p>Hello, {props.name}</p>
            {props.age > 18 && props.age < 65 ? <Age age={props.age}/> : <p>Age prop is less than 18 or greater then 65</p>}
           
        </>
    )

}

export default Welcome