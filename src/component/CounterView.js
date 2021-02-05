/**
 * 容器组件，仅负责简单的渲染逻辑。
 */
import React from "react";
export default function ViewCounter({greeting, count, onIncreaseClick, onDecreaseClick }){
    return (
        <div>
            <div>
                {greeting} You have clicked me {count} Times~~
            </div> 
            <button onClick={onIncreaseClick.bind(this)}>加</button>   
            <br />    
            <button onClick={onDecreaseClick.bind(this)}>减</button>          
        </div>
    )
}