import { Subject } from "rxjs";
import { tap, scan,startWith } from "rxjs/operators";
export default function createReactiveStore(reducer, initValue){
    console.log(`createReactiveStore :: enter, reducer = ${reducer}, initValue = ${initValue}`);
    const action$ = new Subject();
    let currentState = initValue;
    const store$ = action$.pipe(
        // startWith(initValue),       
        scan(reducer, initValue),
        tap(value=>{
            console.log(`createReactiveStore :: in pipe, tap, value = ${JSON.stringify(value)}`);
            currentState = value;
        }),
    );
    return {
        dispatch(_action){
            console.log(`createReactiveStore :: dispatch, _action = ${JSON.stringify(_action)}`);
            action$.next(_action);
        },
        getState(){
            return currentState;
        },
        subscribe(observer){
            console.log(`createReactiveStore :: subscribe, observer = ${observer}`);
            return store$.subscribe(observer);
        }
    };

}