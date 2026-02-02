import React from 'react'

const sideBar = (props) => {
    console.log(props);

    function handleClick(){
        props.setState(props.index)
    }
    return(
        <div>
            <img src={props.element.imageURL} alt="" onClick={handleClick}/>
        </div>
    )
    
}

export default sideBar