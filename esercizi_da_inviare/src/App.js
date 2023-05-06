import Age from "./Age"



const Welcome = ({name = <strong>Pietro</strong>}) => {
            return (
                <>
                    <p>Welcome, {name}</p>
                    <Age/>
                </>
            )
} 

export default Welcome

