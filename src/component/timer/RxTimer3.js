import React, { Component } from "react";
import observe from "../HoComponent";
import TimerView from "./TimerView";
import { BehaviorSubject, empty, interval, of, Subject, throwError } from "rxjs";
import { map, merge, switchMap } from "rxjs/operators";
export default class RxTimer3 extends Component{
    constructor(){
        super(...arguments);
        this.comp = this.generateComp();
    }
    generateComp(){
        // 借助高阶组件，生成一个组件
        return observe(
            TimerView,
            ()=>{
                const START = "start", STOP = "stop", RESET = "reset";
                const step = 100; // 每次产生数据的间隔
                const button =  new Subject(); // 产生鼠标点击数据流，并且将鼠标点击数据流映射成时间数据流
                const time$ = button.pipe(
                    switchMap(action=>{
                        switch(action){
                            case START: 
                                return interval(step).pipe(map(x=>x*step));
                            case STOP:
                                return empty();
                            case RESET:
                                return of(0);
                            default: throwError(`action error, action = ${action}`)
                        }
                    })
                );
                const onStart = ()=> button.next(START);
                const onStop  = ()=> button.next(STOP);
                const onReset = ()=> button.next(RESET);
                const behavior = new BehaviorSubject(0); // 通过BehaviorSubject 在被 subscribe的时候，直接首次将回调函数的数据挂到展示组件上。
                return behavior.pipe(
                    merge(time$),
                    map(millisecond=>{
                        return { millisecond, onStart, onStop, onReset };
                    })
                )
            }
        )
    }

    render(){
        console.log(`[RxTimer3] render :: enter.`);
        // 牛X，居然可以这样写组件。。。
        return  <this.comp {...this.props}> </this.comp>
    }
}