    import React from "react";
    import ReactDOM,{createRoot} from  "react-dom/client"

    let a=10
    let b=20
    createRoot(document.getElementById("root")).render(
        <>
        
        {/* <h1>i am h1</h1>  
        <h2>i am h2</h2>
        <h3>the sum of {a} and{b} is {a+b}</h3>
        <h3>the sub of {a} and {b} is {a-b}</h3>
        <h3>the mult of {a} and {b} is {a*b}</h3>
        <h3>the div of {a} and {b} is {a/b}</h3> */}
        <h1>i can`t declare varibles but we can access varibles in expression</h1>
        <h1>we can`t decision making statements(if,else,switch,case)but we can use ternary operator</h1>
        <h1>(a%2==0 ? "even":"odd")</h1>
         <h1>(a%2==0 && "it should displayed only if it is even")</h1>
        
        </>
    )