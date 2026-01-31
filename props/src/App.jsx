import Parent from "./Parent"

export default function App(){

    let str="this data from app component"
    let a=100
    let b=200
    return <div>
        i am from parent component
        <Parent abc={str} a={a} b={b}></Parent>
    </div>

}