
const Welcome = ({name}) => {
    return(
        <p>Welcome, {name}</p>
    )
} 

export default Welcome

//What happens if no name prop is passed to the Welcome component? 
// It Will not export any value

// Can you set a default value for the name prop?
// 2. Yes, you can like that:

// const Welcome = ({name = "Pietro"}) => {
//     return(
//         <p>Welcome, {name}</p>
//     )
// } 
