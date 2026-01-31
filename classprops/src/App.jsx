import { Component } from "react";
import Parent from "./Parent";

export default class App extends Component{
  render(){

    let a=10
    let b=20
    return <div>
      i am from app
      <Parent   first={a} second ={b}></Parent>
    </div>
  }
}
