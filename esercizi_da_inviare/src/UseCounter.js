import { useState, useCallback } from "react"

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter(count => count + 1);
  }, [])

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCounter(count => count - 1);
  }, [])

  const handleCounterReset = useCallback(function handleCounterReset() {
    setCounter(initialValue);
  }, [initialValue])

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  }
}

export default useCounter