/**
 * Hello World版的加减计数器
 */
import React, { Component } from "react"
export default class Counter extends Component{
    state = {
        count: 0
    }
    onIncreaseClick(){
        this.setState({
            count : this.state.count+1
        })
    }
    onDecreaseClick(){
        this.setState({
            count : this.state.count-1
        })
    }
    render(){
        return (
            <div>
                <div>
                    {this.props.greeting} You have clicked me {this.state.count} Times~~
                </div> 
                <button onClick={this.onIncreaseClick.bind(this)}>加</button>   
                <br />    
                <button onClick={this.onDecreaseClick.bind(this)}>减</button>          
            </div>
        )
    }
}