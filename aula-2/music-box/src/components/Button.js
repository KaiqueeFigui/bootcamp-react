import React from 'react'

function Button(props){
    return(
        <button className={props.NameOfClass}>{props.desc}</button>
    )
}

export default Button