import { Component } from "react";
import Parent from "./Parent";

export default class App extends Component{
  state={
    count:0
  }

  increment=()=>{
    this.setState({
      count: this.state.count+1
    })
  }

  decrement=()=>{
    this.setState({
      count: this.state.count-1
    })
  }

  render(){

    let data="ms dhoni"

    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>increase</button>
      <button onClick={this.decrement}>decrement</button>
      <Parent data={data}></Parent>
    </div>
  }
}