import React,{useState} from 'react'

const Login = () => {

    let [Login,setLogin]=useState({
        username:"",
        password:""
    })


    function handleInput(e){
        console.log(e.target);
        setLogin({...Login,[e.target.name]:e.target.value})
        
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(Login);
        setLogin({
            username:"",
            password:""
        })
        
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter email' name='username' value={Login.username} onInput={handleInput}/>
        <input type="text" placeholder='enter password' name='password' value={Login.password} onInput={handleInput}/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login