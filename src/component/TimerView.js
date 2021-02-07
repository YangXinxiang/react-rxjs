import React from "react";
import '../css/App.css';
export default function TimerView({millisecond, onStart, onStop, onReset, from="Default TimerView"}){
    const ms2Time = (milliseconds) => {
        // console.log(`[TimerView] ms2Time :: enter, milliseconds = ${milliseconds}`);
        let ms = (parseInt(milliseconds % 1000, 10)+"")//.padStart(3, "0");
        let seconds = (parseInt((milliseconds / 1000) % 60, 10)+"")//.padStart(2,"0");
        let minutes = (parseInt((milliseconds / (1000 * 60)) % 60, 10))//.padStart(2, "0");
        let hours = (parseInt(milliseconds / (1000 * 60 * 60), 10))//.padStart(2, "0"); // 这些计算会有JS的数据精度问题
        return hours + ":" + minutes + ":" + seconds + ":" + ms;
    }
    return <div className="compView">
        <h2>{ms2Time(millisecond)}</h2>
        
        <button onClick={onStart}>开始</button>
        <button onClick={onStop}>停止</button>
        <button onClick={onReset}>重置</button>   
        <div>from = {from}</div>  
    </div>
}