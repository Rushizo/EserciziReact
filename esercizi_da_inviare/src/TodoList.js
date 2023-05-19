import { useState } from "react"


const TodoList = () => {
    const [items, setItems] = useState([])
    const [text, setText] = useState("")

    const handleText = (event) => {
        setText(event.target.value)
    } 
    
    const handleItem = (event) => {
        event.preventDefault()
        setItems([...items, text])
        setText(text)
    }


    return(
        <>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <form>
                <input type="text" placeholder="Scrivi..." onChange={handleText}/>
                <button onClick={handleItem}>Aggiungi</button>
            </form>
        </>
    )
}

export default TodoList