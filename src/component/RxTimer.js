import React, { Component } from "react";
import TimerView  from "./TimerView";
import  observe  from "./HoComponent";
import { Subject, BehaviorSubject, interval, throwError, empty, of } from "rxjs";
import { switchMap, map , scan,tap, merge} from "rxjs/operators";
export default function createRxTimer(){
    return observe(
        TimerView,
        ()=>{
            const START = "start";
            const STOP = "stop";
            const RESET = "reset";
            const button = new Subject();
            const times$ = button.pipe(
                switchMap(action=>{
                    switch(action){
                        case START:
                            return interval(100).pipe(map(x=>x*100));
                            break;
                        case STOP:
                            return empty();
                            break;
                        case RESET:
                            return of(0);
                            break;
                        default:
                            return throwError("action error~")
                    }
                })
            )

            const behavior = new BehaviorSubject(0);
            const onStart = ()=>{
                button.next(START);
            }

            const onStop = ()=>{
                button.next(STOP);
            }

            const onReset = ()=>{
                button.next(RESET);
            }

            return behavior.pipe(
                merge(times$),
                // 打行日志跟踪下
                tap((value)=>{
                    console.log(`[RxTimer] createRxTimer :: in BehaviorSubject pipe, after merge, value = ${JSON.stringify(value)}`)
                }),
                map(value=>{
                    return {
                        millisecond:value,
                        onStart,
                        onStop, 
                        onReset
                    }
                })

            )
        }
    )
}