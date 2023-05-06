import Counter from "./Counter"

const App = () =>{
    return(
        <>
            <Counter start={10} incrementAmount={1} incrementInterval={1000} />
        </>
    )
}

export default App