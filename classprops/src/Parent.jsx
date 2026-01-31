
import  {Component} from  "react";

export default class Parent extends Component{
  render(){
    console.log(this.props);
    return <div>
      i am from app

      <h1>The sum of {this.props.first} and
        {this.props.second} is {this.props.first+this.props.second}
      </h1>
      <h1>the diff between {first}and {second} is {first.second}</h1>
    </div>
  }
}

