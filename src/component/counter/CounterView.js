/**
 * 容器组件，仅负责简单的渲染逻辑。
 */
import React from "react";
import '../../css/App.css';
export default function CounterView({greeting, count, 
    onIncreaseClick=()=>console.log(`default onIncreaseClick`), 
    onDecreaseClick=()=>console.log(`default onDecreaseClick`),
    onAsyncIncreaseClick=()=>console.log(`default onAsyncIncreaseClick`), 
 }){
    console.log(`CounterView :: enter, greeting = ${greeting}, count = ${count}, onIncreaseClick = ${onIncreaseClick}, onDecreaseClick = ${onDecreaseClick}, onAsyncIncreaseClick = ${onAsyncIncreaseClick}`);
    return (
        <div className="compView">
            <div>
                {greeting} You have clicked me {count} Times~~
            </div> 
            <button onClick={onIncreaseClick}>加</button>   
            <button onClick={onDecreaseClick}>减</button>
            <button onClick={onAsyncIncreaseClick}>异步加</button>          
        </div>
    )
}