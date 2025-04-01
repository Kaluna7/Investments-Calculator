import Header from "./Components/Header"
import Result from "./Components/Result";
import UserInput from "./Components/UserInput"
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
});


const validInput = userInput.duration >=1;


function handleChange(inputIdentifier, newValue){
    setUserInput(prevInput => {
        return{
            ...prevInput,
            [inputIdentifier] : +newValue
        };
    });
}


  return (
    <>
    <Header/>
    <UserInput onChange={handleChange} userInput={userInput} />

    {!validInput ? <p className="center">Please enter duration greater than 0</p> :
    <Result input={userInput} />
    }
    </>
  )
}

export default App
