const Parent= (Props)=>{

    let {first,second}=Props
    return <div>
        i am from Parent
        <h1>the sum of {Props.first} and {Props.second} is {Props.first + Props.second}</h1>
        <Child></Child>
        <h1>the diff between {first} and {second} is {first-second}</h1>
    </div>
}

export default Parent