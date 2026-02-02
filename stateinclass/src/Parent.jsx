import { Component } from "react";
import Child from "./Child"

export default class Parent extends Component{

    render(){
        console.log(this.props);
        
        return <div>
            i am from parent .{this.props.data} from app component
            <Child></Child>
        </div>
    }

}