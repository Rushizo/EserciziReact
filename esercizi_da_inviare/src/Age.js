

const Age = ({age = 25}) => {
    if(age > 18){
        return (
            <p>Your age is {age}</p>
        )
    } else {
        return (
            <p>You are too young</p>
        )
    }
}

export default Age