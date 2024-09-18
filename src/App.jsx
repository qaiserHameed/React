import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter] = useState(15)

  // let counter = 10;

function addValue(){
  
  
  if(counter < 20){
    counter = counter + 1;
  setCounter(counter)
  console.log(counter);
    
  }else{
    console.log("counter limit is 20");
  }
  
}
function removeValue(){
  if(counter > 0 ){
    counter = counter - 1;
    setCounter(counter);
  }

else{
  console.log("you cant decrease more Value");
}
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <h2>Counter Value: {counter} </h2>
        <button onClick={addValue}>Add Count {counter}</button> <br /><br />
        <button onClick={removeValue}>Remove Count {counter}</button>
        <p>value: {counter}</p>
      </div>
    </>
  )
}

export default App
