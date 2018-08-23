import React from 'react'
import './Bar.css'

export default function Bar(props){
    const barStyle = {
        width: props.width || '0%',
        backgroundColor:props.color || 'red'
    }
    return <div className="bar-wrapper">
 
        <div style={barStyle} className="bar"></div> 
    </div>
}