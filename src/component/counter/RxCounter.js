import React, { Component } from "react";
import CounterView  from "./CounterView";
import  observe  from "../HoComponent";
import { Subject, BehaviorSubject } from "rxjs";
import { switchMap, map , scan,tap} from "rxjs/operators";
export default function RxCounter () {
    return observe(
        CounterView,
        ()=>{
            // 这里必须用 BehaviorSubject 哈, 不能用Subject， 因为在首次注册的时候，就要把onIncreaseClick、onDecreaseClick注入到傻瓜组件上。
            // BehaviorSubject 在一注册的时候，就会给推送一个默认值消息。
            // 疑问， 每次都注入一个onIncreaseClick、onDecreaseClick，实在是浪费哈
            // 因此把它提出来了。
            const counter$ = new BehaviorSubject(0); 
            const onIncreaseClick = ()=>{counter$.next(1)};
            const onDecreaseClick = ()=>{counter$.next(-1)};
            // const counter$ = new Subject(0);
            return counter$.pipe(
                tap(value=>console.log(`[RxCounter] tab enter, stream in, value = ${JSON.stringify(value)}`)),
                scan((acc, value)=>acc+value, 0),
                map(count=>{
                    return {
                        count,
                        greeting : "Hello, this is RxCounter，这是借助RxJS和高阶组件实现的",
                        onIncreaseClick,
                        onDecreaseClick,
                    }
                }),
                tap(value=>{
                    // debugger; // 经过map吐出的数据对象中是有onIncreaseClick、onDecreaseClick的哈，JSON.stringify(value)之后没有打印出来。
                    console.log(`[RxCounter] tab enter, stream out, value = ${JSON.stringify(value)}`)
                }),
            )
        },
        // 下面这个默认值，其实没有起到作用，因为很快就会被counter$ 吐出的默认数据替换掉了。
        {   count : 0,
            greeting : "[RxCounter] Hello~~~RxCounter"
        }
        
    )
}