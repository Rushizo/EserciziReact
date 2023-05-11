

const UncontrolledLogin = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        const username = event.target.username.value = "";
        const password = event.target.password.value = "";

        
        const ciao = true ? username === "" || password === "" : false
        
    }


    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="Text" name="username"></input>
                <input type="password" name="password"></input>
                <button name="login" type="submit" >Login</button>
                <button>Reset</button>
            </form>
        </>
    )
}

export default UncontrolledLogin