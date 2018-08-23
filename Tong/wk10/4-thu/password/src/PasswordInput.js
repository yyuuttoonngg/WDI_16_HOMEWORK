import React from 'react'
import Bar from './Bar'
import estimateStrength from './estimateStrength'
export default class PasswordInput extends React.Component{
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state ={
            content: '',
        }
    }
    handleChange(event){
        this.setState({
            content: event.target.value
        })
        console.log(this.state.content)
    }

    render() {
        const {content} = this.state
        const {score} = estimateStrength(content)
        return <div>
            <input type="password" onChange={this.handleChange}/>
            <p>Your password strength score is {score}</p>
            <Bar width={`${score*20}%`}/>
        </div>
    }
}