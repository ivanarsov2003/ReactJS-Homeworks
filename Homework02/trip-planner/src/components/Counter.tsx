import { useState } from "react"

function Counter(){
    const [counter, setCounter] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("")


    const handleChange = (value: string) => {
        setInputValue(value);
        setErrorMessage("");
    }

    const handleIncrement = () => {
        const parsedValue = parseInt(inputValue);
        if (inputValue === "") {
          setCounter(counter + 1);
        } else if (isNaN(parsedValue)) {
          setErrorMessage("That's not a number");
        } else {
          setCounter(counter + parsedValue);
        }
      };

      const handleDecrement = () => {
        const parsedValue = parseInt(inputValue);
        if (inputValue === "") {
          setCounter(counter - 1);
        } else if (isNaN(parsedValue)) {
          setErrorMessage("That's not a number");
        } else {
          setCounter(counter - parsedValue);
        }
      };


    return(
        
        <div>
            <h1>counter:</h1>
            <input type="text" placeholder="Place number here" value={inputValue}  onChange={(event) => handleChange(event.target.value)}
            />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>{errorMessage}</div>
            <div>counter: {counter}</div>
        </div>
    )
}

export default Counter;