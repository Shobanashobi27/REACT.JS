import React, {useState} from 'react'
import  "./App.css"
import data from "./data.json"
import SideBar from './sideBar'

const App = () =>  {

  console.log(data);
  

  let [state,setState]=useState(0)
  console.log(state);
  
  return (
    <div>
     <main>
      <video src={data[state].videoURL} controls muted loop poster={data[state].imageURL}></video>
      <h1>{data[state].title}</h1>
     </main>

     <aside>
      {data.map((e,i,arr)=>{
        return <SideBar element={e} index={i} setState={setState} ></SideBar>
      })}
     </aside>
    </div>
  )
}

export default App