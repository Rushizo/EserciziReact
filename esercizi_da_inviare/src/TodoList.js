import { useState } from "react"


const TodoList = (props) => {
    const [items, setItems] = useState([])
    const [text, setText] = useState("")

    const handleText = (event) => {
        setText(event.target.value)
    } 
    
    const handleItem = (event) => {
        event.preventDefault()
        setItems([...items, text])
        setText("") 
    }

    const handleResert = () => {
        setItems([])
        setText("")
    }

    const handleRemoveLI = (id) => {
        const newArr = [...items];
        newArr.splice(id, 1);
        setItems(newArr)
    }

    return(
        <>
            <ul>     
                {props.renderArr(items, handleRemoveLI)}
            </ul>
            <form>
                <input type="text" value={text} placeholder="Scrivi..." onChange={handleText}/>
                <button onClick={handleItem}>Aggiungi</button>
                <button onClick={handleResert}>Reset</button>

            </form>
        </>
    )
}

export default TodoList