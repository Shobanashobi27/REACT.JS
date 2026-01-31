import React from "react";
import ReactDom from "react-dom/client";

// ReactDom.createRoot(document.getElementById("root"))

let div=document.getElementById("root")

let header=React.createElement("h1",{},"i created by using create element method") //element type is h1 //react

let anchor=React.createElement("a",{},"this is anchor tag") //react

let inputTag=React.createElement("input",{placeholder:"enter a user Name",type:"password"}) //react

// let btnTag=React.createElement("button",{},"submit") //react

let header2=<h1 id="head" title="csk">i am header</h1> //jsx

let anchartag2=<h1 id="anchar" title="link">i am anchartag2</h1> //jsx

let inputTag2=<h1 id="input" placeholder="" ></h1>

ReactDom.createRoot(div).render(inputTag2)
