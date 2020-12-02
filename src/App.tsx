import React, {useState} from 'react';
import './App.css';

function App() {
  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")
  const [three, setThree] = useState("")
  const [separator, setSeparator]  = useState("");
  const [concString, setConcatString] = useState("");

  function concatinateStrings(){
    let finalSeparator = separator == "" ? "" : separator + " ";
    setConcatString(one + finalSeparator + two + finalSeparator + three)
  }


  return (
    <div className="App">
      <div className="instructions">
        Instructions: Enter text in each input box below. <br/>
        The number represents the sequential order that will <br/>
        be displayed in the output box. <br/>
        The S stands for Seperator, and by default will be empty. <br/>
        E.g 1 = "A", 2 = "B", 3 = "C", Output = "ABC" <br/>
        Add a seperater value to seperate each of the strings. <br/>
        E.g 1 = "A", 2 = "B", 3 = "C", S = ",", Output = "A, B, C"

      </div>
      <div className="userInputBlock">
        Enter 3 strings below
        <div className="userInput"> 1 <input onChange={ event => setOne(event.target.value)} style={{width:"75%"}} placeholder="Add first value here"></input> </div> 
        <div className="userInput"> 2 <input onChange={ event => setTwo(event.target.value)} style={{width:"75%"} } placeholder="Add second value here"></input> </div> 
        <div className="userInput"> 3 <input onChange={ event => setThree(event.target.value)} style={{width:"75%"} } placeholder="Add third value here"></input> </div> 
        <div className="userInput"> S <input onChange={ event => setSeparator(event.target.value)}style={{width:"75%"} } placeholder="Add seperator value here"></input> </div>
        <button onClick={concatinateStrings} className="submitButton"> Submit </button> 
      </div>

      <div className="outputBlock">
        <div style={{fontSize:"20px"}}> Output </div>
        {concString == "" ? "String will be displayed here" : concString}

      </div>

    </div>
    
  );
}

export default App;
