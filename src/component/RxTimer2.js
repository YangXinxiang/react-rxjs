import React, { Component } from "react";
import TimerView  from "./TimerView";
import  observe  from "./HoComponent";
import { Subject, BehaviorSubject, interval, throwError, empty, of } from "rxjs";
import { switchMap, map , scan,tap, merge} from "rxjs/operators";
export default function createRxTimer2(){
    return observe(TimerView,
        ()=>{
            const button = new Subject();
            const START = "start";
            const STOP = "stop";
            const RESET = "reset";
            const step = 100;
            const time$ = button.pipe(
                switchMap(
                    action=>{
                        switch(action){
                            case START:
                                return interval(step).pipe(map(x=>x*step));
                                break;
                            case STOP:
                                return empty()
                                break;
                            case RESET:
                                return of(0)
                                break;
                            default:
                                throwError(`Hoops, acton error~~action = ${action}`);
                        }
                    }
                )
            );

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
                merge(time$),
                map(totalTime=>{
                    return {
                        millisecond : totalTime,
                        onStart, 
                        onStop, 
                        onReset,
                    }
                })
            );

        }
    )
}