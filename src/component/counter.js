/**
 * Hello World版的加减计数器
 */
import React, { Component } from "react";
import ViewCounter from "./CounterView";
export default class Counter extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            count: 0
        }
        this.onIncreaseClick = this.onIncreaseClick.bind(this);
        this.onDecreaseClick = this.onDecreaseClick.bind(this);
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
            <ViewCounter
                greeting={this.props.greeting}
                count={this.state.count}
                onIncreaseClick={this.onIncreaseClick}
                onDecreaseClick={this.onDecreaseClick}
            >        
            </ViewCounter>
        )
    }
}