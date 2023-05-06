import Age from "./Age"

const Welcome = (props) =>{
    return(
        <>
            <p>Hello, {props.name}</p>
            {props.age ? <Age age={props.age}/> : <p>age is not defined</p>}
           
        </>
    )

}

export default Welcome