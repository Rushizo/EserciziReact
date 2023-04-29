
const Welcome = ({name = <strong>Pietro</strong>, age = 25}) => {
    return(
        <>
            <p>Welcome, {name}</p>
            <p>Your age is {age}</p>
        </>
    )
} 

export default Welcome

// What happens if the name prop is a JSX expression instead of a string? 
// It, in this case, will change the font of Pietro in bold