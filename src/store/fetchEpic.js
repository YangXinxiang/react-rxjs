import {of} from "rxjs";
import { delay, map, tap } from "rxjs/operators";
import { ofType } from "redux-observable";
import  * as ActionType from "./ActionType";
export default function fetchEpic  (action$, state$){
    console.log(`fetchEpic :: enter.`);
    return action$.pipe(
        tap(value=>console.log(`fetchEpic :: stream enter, value = ${JSON.stringify(value)}`)),
        ofType(ActionType.FETCH_USER),
        delay(1000),
        map(_action$=>({
            type: ActionType.FETCHED_USER,
            user : {
                name:"YJLY",
                age:18,
                phoneNum:121212,
            }
        })),
        tap(value=>console.log(`fetchEpic :: stream end, value = ${JSON.stringify(value)}`)),
    )
}