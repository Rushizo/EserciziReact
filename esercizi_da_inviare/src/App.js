import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import ClickCounter from "./ClickCounter"

const App = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<ClickCounter />} />
        </Routes>
        </>
    )
}