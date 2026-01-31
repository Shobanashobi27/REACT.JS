import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

// let rootDiv=document.getElementById("root")
// ReactDom.createRoot(rootDiv)
let login=<div className="cont">
    <form action="">
    <label htmlFor="">User Name</label>
    <input type="text" placeholder="enter the user Name" />
    <label htmlFor="">Password</label>
    <input type="password" placeholder="enter the password"  />
    <button>login</button>
</form>
</div>


ReactDOM.createRoot(document.getElementById("root")).render(
   
    /* <h1>i am header</h1>
    <h2>i am header2</h2>
    <label htmlFor=""></label>
    <input type="text"  className=""/> */
    login
    
   
    )


