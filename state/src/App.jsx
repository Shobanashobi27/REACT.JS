import { useState } from "react"
import Theme from "./Theme"

let App = () =>{

  // let arr = ["chennai","mumbai"]
  // let [csk,mi]=arr
  // console.log(csk);
  
  // // console.log(useState());
  

  // return <div>
  //   <h1></h1>
  //   <button>Increase</button>
  // </div>

  let [State,setState] = useState(0)
  console.log(State);

  function handleClick(){
    setState(State+1)
  }

  function decreaseClick(){
    setState(State-1)
  }

  return <div>
  {/*    <h1>{State}</h1>
   <button onClick={handleClick}>Increase</button>
   <button onClick={decreaseClick}>Decrease</button> */}

  <Theme></Theme>
    
  </div>
  
}

export default App