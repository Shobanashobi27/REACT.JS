import child from "./child";



export default function Parent(props){
    console.log(props);

    // return <div>
    //     i am from parent component but{props.abc}
    //     <h1> sum of {props.a} and {props.b} is {props.a+props.b}</h1>
    // </div>
    let arr=["ms dhoni","virat","rohit"]

    let obj={
        name:"shobana",
        email:"shob@gmail.com"
    }

    return <div>
        i am from child parent componet but{props.abc}
        <h1>
            sum of {props.a} and{props.b} is{props.a+props.b}</h1>
            <child xyz={arr} obj={obj}>
                <form >
                    <input type="text" /> <input type="text" />
                </form>
            </child>
        
    </div>
}