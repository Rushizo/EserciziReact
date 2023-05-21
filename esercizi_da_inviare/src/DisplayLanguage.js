import React from "react";
import { LanguageContext } from "./LanguageContext"

const Strings = {
  en:{
    Greets: "Hello, Welcome"
  },
  it:{
    Greets: "Ciao, Benvenuto"
  }
}

class DisplayLanguage extends React.Component {
    render(){
        return (
          <>
          <LanguageContext.Consumer>
            {Language => {
                return(
                  <div>
                    <h1>
                      {Strings[Language].Greets}
                    </h1>
                  </div>
                )
              }
            }

          </LanguageContext.Consumer>
          </>
        )
      }
}

export default DisplayLanguage