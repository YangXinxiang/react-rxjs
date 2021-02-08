/**
 * Hello World版的加减计数器
 */
import React, { Component } from "react";
import ViewCounter from "./CounterView";
import { Subject } from "rxjs";
import { scan } from "rxjs/operators";
export default class Counter extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            count: 0
        }
        this.counter = new Subject();
        this.counter.pipe(
            scan((acc, value)=> acc+value, 0)
        ).subscribe(
            currentCount => this.setState({...this.state, count:currentCount})
        )
        
        this.onIncreaseClick = this.onIncreaseClick.bind(this);
        this.onDecreaseClick = this.onDecreaseClick.bind(this);
    }
    
    onIncreaseClick(){
        this.counter.next(1);
    }
    onDecreaseClick(){
        this.counter.next(-1);
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