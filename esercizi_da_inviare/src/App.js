import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"
import TodoList from "./TodoList"


const App = () =>{
    renderArr = (arr, remove) => {
        return arr.map((item, index) => {
          return(
            <>
                <li index={index}>{item}</li>
              <button onClick={() => remove(index)}>remove this</button>
            </>
          )
        })
      }
    
    return(
        <>
            <InteractiveWelcome  />
            <Login />
            <TodoList renderArr={renderArr}/>
            
        </>
    )
}

export default App