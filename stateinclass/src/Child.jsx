import { Component } from "react";

export default class Child extends Component{

    render(){
        console.log(this.props);
        
        return <div>
            i am from child .{this.props.data} from app component
        </div>
    }

}