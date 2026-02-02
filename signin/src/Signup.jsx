import React,{useState} from 'react'

const Signup = () => {

    let [state,setState]=useState({
        username:"",
        email:"",
        mobile:"",
        gender:"",
        skills:[]
    })
    

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleInput(e){
        if(e.target.type=="checkobox"){
            console.log("this is for checkbox");

            let index = state.skills.findIndex((ele)=>{
                if(ele==e.target.value){
                    return ele
                }
            })

            console.log(index);
            

            state.skills.push(e.target.value)

            setState({...state,skills:state.skills})
        }
        else{
            console.log("this is for other input box");

            setState({...state,[e.target.name]:e.target.value})
        }
    }

    function handleInput(e){
        setState({
            ...state,[e.target.name]:e.target.value
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
         <input type="text"  placeholder='enter username' name='username' value={state.username} onInput={handleInput}/> <br />
         <input type="email" placeholder='enter email' name='email' value={state.email} onInput={handleInput}/> <br />
         <input type="tel" placeholder='enter number' name='mobile' value={state.mobile} onInput={handleInput}/><br />
         <label htmlFor="">Gender</label> : <input type="radio" name='gender' onInput={handleInput} value="male"/><label htmlFor="">Male</label><input type="radio" name='gender' onInput={handleInput} value="female"/><label htmlFor="">Female</label><br />
        <label htmlFor="">Skills :</label>
        <input type="checkbox" name='skills' value="HTML" onInput={handleInput}/> <label htmlFor="">HTML</label>
        <input type="checkbox" name='skills' value="CSS" onInput={handleInput}/><label htmlFor="">CSS</label>
        <input type="checkbox" name='skills' value="JS" onInput={handleInput}/><label htmlFor="">JS</label>
        <input type="checkbox" name='skills' value="React" onInput={handleInput}/><label htmlFor="">REACT</label><br />
         <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup