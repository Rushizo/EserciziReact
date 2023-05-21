import React from 'react'
import { useState } from "react"

const ClickCounter = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
    };

    return (
        <div>
          <h1>{counter}</h1>
          <div>
            <button onClick={increase}>One more!</button>
          </div>
        </div>
      );
}

export default ClickCounter