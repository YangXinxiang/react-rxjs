/**
 * 容器组件，仅负责简单的渲染逻辑。
 */
import React from "react";
import '../css/App.css';
export default function CounterView({greeting, count, onIncreaseClick=()=>console.log(`default onIncreaseClick`), onDecreaseClick=()=>console.log(`default onDecreaseClick`) }){
    console.log(`CounterView :: enter, greeting = ${greeting}, count = ${count}, onIncreaseClick = ${onIncreaseClick}, onDecreaseClick = ${onDecreaseClick}`);
    return (
        <div className="counterView">
            <div>
                {greeting} You have clicked me {count} Times~~
            </div> 
            <button onClick={onIncreaseClick}>加</button>   
            <button onClick={onDecreaseClick}>减</button>          
        </div>
    )
}