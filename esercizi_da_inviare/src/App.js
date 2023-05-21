import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext"
import { useState } from "react"

const App = () => {

  const [language, setLanguage] = useState ("en")

  function handleLanguageChange (event){
    setLanguage(event.target.value) 
  };

    return (
      <>
      <div>
        <b>Current language: </b>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
        <LanguageContext.Provider value={language}>
        <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
      </>
    )
}

export default App